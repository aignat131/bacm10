// change navbar styles on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >0)
})


// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
 

menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";}
)


//close nav menu
const closeNav = () => {
    menu.classList.remove('open'); 
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click',closeNav);


/*==========================================QUESTIONS====\=
==================================*/

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoretext = document.querySelector('#score');
const progressBarfull = document.querySelector('#progressBarfull');


let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:"Care este suma radacinilor x1,x2 ale ecuatiei x²+3x+5=0",
        choice1: '3',
        choice2: '-3',
        choice3: '1',
        answer: 2, 

    },
    {
        question:"Descompuneți în produs de două paranteze expresia: a³-b³",
        choice1: 'a³-3a²b+3ab²-b³',
        choice2: 'a³-3ab²+3a²b-b³',
        choice3: 'a³+3a²b+3ab²+b³',
        answer: 1, 

    },
    {
        question:"Cu cât este egal sin(a+b)",
        choice1: 'sin(a+b)=cosacosb + sinasinb',
        choice2: 'sin(a+b)=sinacosb + sinbcosa',
        choice3: 'sin(a+b)=sinacosb - sinbcosa',
        answer: 2, 

    },
    {
        question:"Legea * se numeşte asociativă dacă",
        choice1: '(x*y)*z=(x*z)(y*z)',
        choice2: 'x*y=y*x',
        choice3: '(x*y)*z=x(y*z)',
        answer: 3, 

    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

test_teorie = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Intrebarea ${questionCounter} din ${MAX_QUESTIONS}`
    progressBarfull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers =false
        const selectedChoice =e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classTopApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        if(classTopApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classTopApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classTopApply)
            getNewQuestion()
        },1000)
    
    if(questionCounter == MAX_QUESTIONS){
    if( score < 200){
        return window.location.assign('/fend.html')
    }
    }
    })
    
})


incrementScore = num =>{
    score +=num
    scoretext.innerText = score
}

test_teorie()


/*===================================POP-UP===============
================================================*/
function openPopup() {
    var body = document.body;
    body.classList.add("overlay-active");
    var popupButton = document.getElementById("popup-button");
    popupButton.addEventListener("click", function() {
      body.classList.remove("overlay-active");
    });
  }
  
  setTimeout(function() {
    openPopup();
  }, 500); // set the time in milliseconds (1 second in this case)
  