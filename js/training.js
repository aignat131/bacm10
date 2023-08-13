
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


/*==========================================QUESTIONS====
CAPITOLUL..  LECTIA..

        EXERCITIU
           IDEEA EXERCITIULUI(PROBABLY A FOMULA)
           REZOLVAREA COMPLETA
           IDEEA RAMASA
\=
==================================
var img = document.createElement("img");
img.src = "images/i1.png";
document.getElementById("answer").appendChild(img);*/

// Define an array of questions and answers

var qa = [
  {
    question:
      " Rezolvaţi în mulţimea numerelor reale ecuația \\(\\sqrt{x^2-2x-2}=x-2\\) ",
    answer: [
      " Ridicăm la pătrat în ambele părți",
      "\\(x^2-2x-2=(x-2)^2 \\implies\\) \\(x^2-2x-2=x^2-4x+4 \\implies x = 3\\), care convine",
      "Verificăm soluția dacă îndeplinește condițiile de existență a radicalului in R.",
      "Anume tot ce se află sub el trebuie să fie pozitiv, când înlocuim soluția x=3 în radical vom obține rezultatul \\(3^2-2 \\cdot 3-2=1\\), care este mai mare decât 0"
    ],
  },
  {
    question:
      " Calculați probabilitatea ca, alegând un număr din mulțimea A = {1!, 2!, 3!, ..., 10!} , acesta să fie divizibil cu 9.",
    answer: [
      " Mulțimea A are 10 elemente, deci sunt 10 cazuri posibile.",
      " Numerele divizibile cu 9 din mulțimea A sunt 6!, 7!, 8!, 9! și 10!(deoarece au în descompunerea în factori primi și pe \\(3^2 ,  6!=1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6\\) și găsim cei 2 de 3 in descompunerea lui 3 si 6) deci sunt 5 cazuri favorabile.",
      " \\(p=\\dfrac{nr. cazuri favorabile}{nr. cazuri posibile}=\\dfrac{5}{10}=\\dfrac{1}{2}\\)"
    ]
  },
  {
    question: "Se consideră triunghiul ABC și punctul D mijlocul segmentului BC. Arătați că, pentru orice puncte E și F astfel încât \\(\\overrightarrow{AE}=\\overrightarrow{FD}\\) , are loc relația\\(2(\\overrightarrow{EB}+\\overrightarrow{FC})=(\\overrightarrow{AB}+\\overrightarrow{AC})\\) .",
    answer: ["Când ne confruntăm cu probleme de calcul vectorial trebuie să ne gândim prima oara la regula lui Chasles, care ne dă următoare relație :",
     "\\(\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}\\), ca și cum s-ar simplifica termenul care se repetă",
      "Ne vom folosi de egalitatea dată, scriind fiecare termen din partea stângă, ca sumă de alți 2 vectori, mai precis", 
      "\\(\\overrightarrow{EB}+\\overrightarrow{FC}=\\overrightarrow{EA}+\\overrightarrow{AB}+\\overrightarrow{FD}+\\overrightarrow{DC}=\\overrightarrow{AB}+\\overrightarrow{DC}\\)",
       "(se încearcă mereu să se scrie suma în funcție de vectori care se află în relația dată în enunț, iar in cazul nostru ne folosim de faptul ca \\(\\overrightarrow{AE}=\\overrightarrow{FD} \\implies  \\overrightarrow{FD}=-\\overrightarrow{EA})\\) \\(2 (\\overrightarrow{EB}+\\overrightarrow{FC})= 2\\overrightarrow{AB}+2\\overrightarrow{DC}=\\overrightarrow{AB}+\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AB}+\\overrightarrow{AC}(2\\overrightarrow{DC}=\\overrightarrow{BC}\\) deoarece D este mijlocul lui BC)"
    ]
  },
  {
    question: "",
    answer: [".",
     "",
      "",
    ]
  },
  {
    question: "",
    answer: [".",
     "",
      "",
    ]
  },
];
function renderMathJax(element) {
  MathJax.typesetPromise([element]).catch((error) => {
    console.error("MathJax typesetting failed:", error);
  });
}
// Initialize variables to keep track of the current question and answer
var currentQA = 0;
var currentAnswer = 0;

// Function to save the current progress in local storage
function saveProgress() {
  localStorage.setItem("currentQA", currentQA);
  localStorage.setItem("currentAnswer", currentAnswer);
}

// Function to load the saved progress from local storage
function loadProgress() {
  currentQA = parseInt(localStorage.getItem("currentQA")) || 0;
  currentAnswer = parseInt(localStorage.getItem("currentAnswer")) || 0;
}

// Function to display the current question and hide the "next question" button
function displayQuestion() {
  document.getElementById("question").innerHTML = qa[currentQA].question;
  document.getElementById("answer").innerHTML = "";
  currentAnswer = 0;
  document.getElementById("nextQuestion").style.display = "none"; // hide the "next question" button
  document.getElementById("next").style.display = "block"; // show the "next answer" button
  currentQA++;
  if (currentQA <= qa.length) {
    renderMathJax(document.getElementById("question"));
  }

  if (currentQA === qa.length) {
    document.getElementById("next").style.display = "none";
  }
}
// Function to display the next answer or move to the next question
// Function to display the next letter of the answer
function displayNextLetter(answerElement, answerText) {
  if (answerElement.dataset.currentIndex < answerText.length) {
    const currentIndex = parseInt(answerElement.dataset.currentIndex);
    const nextLetter = answerText[currentIndex];
    answerElement.innerHTML += nextLetter;
    answerElement.dataset.currentIndex = currentIndex + 1;

    // Schedule the next letter to be displayed after a delay
    setTimeout(() => {
      displayNextLetter(answerElement, answerText);
    }, 50); // Adjust the delay time as needed
  } else {
    currentAnswer++;
    if (currentAnswer == qa[currentQA - 1].answer.length) {
      document.getElementById("next").style.display = "none";
      if (currentQA == qa.length) {
        return window.location.assign("/verificare1.html");
      } else {
        document.getElementById("nextQuestion").style.display = "block";
      }
    }
  }
}

// Update the displayNext function
function displayNext() {
  if (currentAnswer < qa[currentQA - 1].answer.length) {
    var answerElement = document.createElement("p");
    answerElement.classList.add("answer-paragraph");
    answerElement.dataset.currentIndex = 0; // Add a custom attribute to track index

    document.getElementById("answer").appendChild(answerElement);

    var answerText = qa[currentQA - 1].answer[currentAnswer];

    // Start displaying the answer letter by letter
    displayNextLetter(answerElement, answerText);
  } else {
    currentQA++;
    if (currentQA == qa.length) {
      return window.location.assign("/verificare1.html");
    } else {
      displayQuestion();
    }
  }
}



// Attach event listener to buttons
document.getElementById("next").addEventListener("click", displayNext);
document
  .getElementById("nextQuestion")
  .addEventListener("click", displayQuestion);

// Start by displaying the first question
displayQuestion();
/*
// Function to save progress
function saveProgress() {
  var progress = {
    currentQA: currentQA,
  };
  localStorage.setItem("progress", JSON.stringify(progress));
}

// Function to load saved progress
function loadSavedProgress() {
  var savedProgress = localStorage.getItem("progress");
  if (savedProgress) {
    var progress = JSON.parse(savedProgress);
    currentQA = progress.currentQA;
  }
}

// Function to clear saved progress
function clearSavedProgress() {
  localStorage.removeItem("progress");
}

// Prompt user to keep or clear saved progress when the page loads
window.addEventListener("load", function () {
  var wantsToKeepProgress = confirm("Do you want to keep your progress?");
  if (wantsToKeepProgress) {
    loadSavedProgress();
  } else {
    clearSavedProgress();
  }
});

// Save progress when leaving the page
window.addEventListener("beforeunload", function () {
  saveProgress();
});*/