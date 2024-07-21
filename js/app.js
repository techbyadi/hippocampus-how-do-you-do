const sports = [
  {
    question: 'Which sport did Michael Jordan play professionally apart from basketball?',
    options: ['Baseball', 'Tennis', 'Soccer', 'Football'],
    answer: 'Baseball'
  },
  {
    question: 'In which year did Roger Federer win his first Wimbledon title?',
    options: ['2001', '2003', '2005', '2007'],
    answer: '2003',
  },
  {
    question: 'Who scored the "Hand of God" goal in the 1986 FIFA World Cup?',
    options: ['Pelé', 'Diego Maradona', 'Gary Lineker', 'Zinedine Zidane'],
    answer: 'Diego Maradona',
  },
  {
    question: 'Which country won the inaugural ICC T20 World Cup in 2007?',
    options: ['Australia', 'India', 'England', 'Pakistan'],
    answer: 'India',
  },
];

/*-------------------------------- Constants --------------------------------*/
const headerText = "Choose a category";

/*---------------------------- Variables (state) ----------------------------*/

let sportButton, literatureButton;
let chooseCategoryString = "";
let counterSports = 0;
let counterLiterature = 0;

/*------------------------ Cached Element References ------------------------*/

let sportsButtonEl = document.getElementById("sports");
let literatureButtonEl = document.getElementById("literature");
let headerTextEl = document.querySelector(".h4");
let mainSectionEl = document.querySelector(".category");

/*-------------------------------- Functions --------------------------------*/

renderInitialState();

function renderInitialState() {
  setHeaderText(headerText);
}

function setHeaderText(text) {
  headerTextEl.textContent = text;
}

function displayQuestion() {
  headerTextEl.textContent = sports[counterSports].question;
}

function displayOptions() {
  for (let i = 0; i <= sports[0].options.length - 1; i++) {
    let optionsEl = document.createElement("button");
    mainSectionEl.appendChild(optionsEl);
    optionsEl.className = "options";
    optionsEl.textContent = sports[counterSports].options[i];
  }
}

function handleSportsCategoryClick() {
  mainSectionEl.removeChild(sportsButtonEl);
  mainSectionEl.removeChild(literatureButtonEl);
  headerTextEl.classList.remove("h4");
  headerTextEl.classList.toggle("question");
  displayQuestion();
  displayOptions();
  counterSports++;
}

/*----------------------------- Event Listeners -----------------------------*/

sportsButtonEl.addEventListener("click", handleSportsCategoryClick);
