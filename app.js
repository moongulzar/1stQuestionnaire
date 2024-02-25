// Load first question
// Add event listener to submit button
// Validate inputs
// Check the answer
// Load the next question if queations are remaining in questions array
// Otherwise hide the question, options , and button section and show the restart button
// Add event listener to refresh the page

const questions = [
  {
    question: "What is HTML?",
    a: "HyperText Markup Language",
    b: "Styling Language",
    c: "Programming Language",
    d: "None",
    correct: "a",
  },
  {
    question: "What is CSS?",
    a: "HyperText Markup Language",
    b: "Styling Language",
    c: "Client Side Scripting",
    d: "Server Side Scripting",
    correct: "b",
  },
  {
    question: "What is PHP?",
    a: "Client Side Scripting",
    b: "Styling Language",
    c: "Server Side Scripting",
    d: "None",
    correct: "c",
  },
];

currenIndex = 0;

loadQuestion(currenIndex);

const btnSubmitElement = document.querySelector("#btn-submit");

btnSubmitElement.addEventListener("click", function () {
  let reslut = validateInputs();

  if (reslut) {
    currentQuestion = questions[currenIndex];

    const evaluationSectionElement = document.querySelector("#evaluation-section"
    );
    if (reslut == currentQuestion.correct) {
      evaluationSectionElement.innerHTML += `<div class='text-green'>${currenIndex + 1
        }. Correct</div>`;
    } else {
      evaluationSectionElement.innerHTML += `<div class='text-red'>${currenIndex + 1
        }. Incorrect</div>`;
    }
    currenIndex++;
    if (currenIndex < questions.length) {
      loadQuestion(currenIndex);
      uncheckInput(reslut);
    } else {
      const questionSectionElement = document.querySelector("#question-section");
      const optionsSectionElement = document.querySelector("#options-section");
      const btnRestartElement = document.querySelector("#btn-restart");

      questionSectionElement.classList.add("d-none");
      optionsSectionElement.classList.add("d-none");
      btnSubmitElement.classList.add("d-none");
      btnRestartElement.classList.remove("d-none");
    }
  } else {
    alert("Please select an option!");
  }
});

function loadQuestion(currenIndex) {
  const questionTextElement = document.querySelector("#question-text");
  const aTextElement = document.querySelector("#a-text");
  const bTextElement = document.querySelector("#b-text");
  const cTextElement = document.querySelector("#c-text");
  const dTextElement = document.querySelector("#d-text");

  let currentQuestion = questions[currenIndex];

  questionTextElement.innerText = currentQuestion.question;
  aTextElement.innerText = currentQuestion.a;
  bTextElement.innerText = currentQuestion.b;
  cTextElement.innerText = currentQuestion.c;
  dTextElement.innerText = currentQuestion.d;
}

function validateInputs() {
  const optionsElement = document.querySelectorAll(".options");
  let result = false;
  optionsElement.forEach((element) => {
    if (element.checked == true) {
      result = element.id;
    }
  });
  return result;
}

function uncheckInput(id) {
  const selectedOptionElement = document.querySelector("#" + id);
  selectedOptionElement.checked = false;
}

const btnRestartElement = document.querySelector("#btn-restart");
btnRestartElement.addEventListener("click", function () {
  location.reload();
})