const sports = [
  {
    question:
      "Which sport did Michael Jordan play professionally apart from basketball?",
    options: ["Baseball", "Tennis", "Soccer", "Football"],
    answer: "Baseball",
  },
  {
    question: "In which year did Roger Federer win his first Wimbledon title?",
    options: ["2001", "2003", "2005", "2007"],
    answer: "2003",
  },
  {
    question: 'Who scored the "Hand of God" goal in the 1986 FIFA World Cup?',
    options: ["Pelé", "Diego Maradona", "Gary Lineker", "Zinedine Zidane"],
    answer: "Diego Maradona",
  },
  {
    question: "Which country won the inaugural ICC T20 World Cup in 2007?",
    options: ["Australia", "India", "England", "Pakistan"],
    answer: "India",
  },
  {
    question:
      "Which golfer is known for winning the Masters Tournament with a record 12-stroke margin in 1997?",
    options: [
      "Jack Nicklaus",
      "Phil Mickelson",
      "Tiger Woods",
      "Arnold Palmer",
    ],
    answer: "Tiger Woods",
  },
  {
    question:
      "Which female tennis player has won the most Grand Slam singles titles?",
    options: [
      "Serena Williams",
      "Steffi Graf",
      "Margaret Court",
      "Martina Navratilova",
    ],
    answer: "Margaret Court",
  },
];

/*-------------------------------- Constants --------------------------------*/
const headerText = "Select a Category";

/*---------------------------- Variables (state) ----------------------------*/

let counterSports = 0;
let result = 0;

/*------------------------ Cached Element References ------------------------*/

let sportsButtonEl = document.getElementById("sports");
let literatureButtonEl = document.getElementById("literature");
let headerTextEl = document.querySelector(".h4");
let mainSectionEl = document.querySelector(".category");
let footerSectionEl = document.querySelector(".footer");
let sectionEl = document.querySelector(".main");
let headerEl = document.querySelector("#header");

/*-------------------------------- Functions --------------------------------*/

renderInitialState();

function renderInitialState() {
  setHeaderText(headerText);
}

function setHeaderText(text) {
  headerTextEl.textContent = text;
}

function displayQuestion() {
  if (counterSports <= sports.length - 1)
    headerTextEl.textContent = sports[counterSports].question;
}

function displayOptions() {
  if (counterSports <= sports.length - 1) {
    for (let option = 0; option <= sports[0].options.length - 1; option++) {
      let optionsEl = document.createElement("button");
      mainSectionEl.appendChild(optionsEl);
      optionsEl.className = "options";
      optionsEl.textContent = sports[counterSports].options[option];
    }
  }
}

function clearOptions() {
  mainSectionEl.innerHTML = "";
}

function handleSportsCategoryClick() {
  mainSectionEl.removeChild(sportsButtonEl);
  mainSectionEl.removeChild(literatureButtonEl);
  headerTextEl.classList.toggle("question");
  displayQuestion();
  displayOptions();
  addNextButton();
}

function addNextButton() {
  let nextButtonEl = document.createElement("button");
  footerSectionEl.appendChild(nextButtonEl);
  nextButtonEl.className = "next";
  nextButtonEl.textContent = "Next";
}

function renderQnAState() {
  displayQuestion();
  clearOptions();
  displayOptions();
}

function handleNextButtonClick(event) {
  if (event.target.classList.contains("next")) {
    counterSports++;
    renderQnAState();
    if (counterSports === sports.length - 1) {
      event.target.textContent = "Result";
    }
    if (counterSports === sports.length) {
      sectionEl.removeChild(footerSectionEl);
      if (result >= 4){
        headerTextEl.textContent = `Final Score: ${result}`;
        confetti.start(2000);}
      else
        headerTextEl.textContent = `Final Score: ${result}`;
        
      headerEl.appendChild(headerTextEl);
    }
  }
}

function handleResultClick(event) {
  if (event.target.classList.contains("options")) {
    if (event.target.textContent === sports[counterSports].answer) {
      event.target.className = "rightAnswer";
      event.target.classList.add('animate__animated','animate__bounce');
      result++;
    } else {
      event.target.className = "wrongAnswer";
      event.target.classList.add('animate__animated','animate__swing');
    }
    disableAllOptions();
  }
}

function disableAllOptions() {
  const buttons = mainSectionEl.getElementsByClassName("options");
  for (let button of buttons) {
    button.disabled = true;
  }
}

/*----------------------------- Event Listeners -----------------------------*/

sportsButtonEl.addEventListener("click", handleSportsCategoryClick);
footerSectionEl.addEventListener("click", handleNextButtonClick);
mainSectionEl.addEventListener("click", handleResultClick);


