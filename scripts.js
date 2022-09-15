const quizData = [
    {
        id:1,
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        id:2,
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        id:3,
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        id:4,
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "c",
    },    
    {
        id:5,
        question: "How to write an IF statement in JavaScript?",
        a: "if i = 5 then",
        b: "if i == 5 then",
        c: "if (i == 5)",
        d: "none of the above",
        correct: "c",
    },
    {
        id:6,
        question: "How can you add a comment in a JavaScript?",
        a: "//",
        b: "/",
        c: "*",
        d: "none of the above",
        correct: "a",
    },
    {
        id:7,
        question: "How do you find the number with the highest value of x and y?",
        a: "Math.max(x, y)",
        b: "Math.ceil(x, y)",
        c: "top(x, y)",
        d: "none of the above",
        correct: "a",
    },
    {
        id:8,
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onclick",
        c: "onmouse",
        d: "none of the above",
        correct: "b",
    },
    {
        id:9,
        question: "Which operator is used to assign a value to a variable?",
        a: "*",
        b: "-",
        c: "=",
        d: "none of the above",
        correct: "c",
    },
    {
        id:10,
        question: "How do you declare a JavaScript variable?",
        a: "var carName;",
        b: "variable carName;",
        c: "v carName;",
        d: "none of the above",
        correct: "a",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const optionA = document.getElementById('a_text')
const optionB = document.getElementById('b_text')
const optionC = document.getElementById('c_text')
const optionD = document.getElementById('d_text')
let answerScore = document.querySelector('#score')
let questionScore = document.querySelector('#questionScore')
const submitBtn = document.getElementById('submit')
const nextBtn = document.getElementById('next')

let currentQuiz = 0
score = 0
loadQuiz();

function loadQuiz() {
    questionScore.innerText = `Question: ${currentQuiz + 1}`;
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    if(answer) {
        
        
       if(answer === quizData[currentQuiz].correct) {
        score++
           console.log(score)
           answerScore.innerText = `Score: ${score}`;
       }
       currentQuiz++

       if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
    }

    nextBtn.addEventListener('click', () => {
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
 
    })

});