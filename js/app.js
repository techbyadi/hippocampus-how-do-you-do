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
  {
    question: 'Which golfer is known for winning the Masters Tournament with a record 12-stroke margin in 1997?',
    options: ['Jack Nicklaus', 'Phil Mickelson', 'Tiger Woods', 'Arnold Palmer'],
    answer: "Tiger Woods",
  },
  {
  question: 'Which female tennis player has won the most Grand Slam singles titles?',
  options: ['Serena Williams', 'Steffi Graf', 'Margaret Court', 'Martina Navratilova'],
  answer: 'Margaret Court',
  }
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
let footerSectionEl = document.querySelector('.footer');
let sectionEl = document.querySelector('.main');

/*-------------------------------- Functions --------------------------------*/

renderInitialState();

function renderInitialState() {
  setHeaderText(headerText);
}

function setHeaderText(text) {
  headerTextEl.textContent = text;
}

function displayQuestion() {
  if(counterSports <= sports.length-1)
  headerTextEl.textContent = sports[counterSports].question;
}

function displayOptions() {
  if(counterSports <= sports.length-1){
  for (let option = 0; option <= sports[0].options.length - 1; option++) {
    let optionsEl = document.createElement("button");
    mainSectionEl.appendChild(optionsEl);
    optionsEl.className = "options";
    optionsEl.textContent = sports[counterSports].options[option];
  }
}
}

function clearOptions(){
  mainSectionEl.innerHTML='';
}

function handleSportsCategoryClick() {
  mainSectionEl.removeChild(sportsButtonEl);
  mainSectionEl.removeChild(literatureButtonEl);
  headerTextEl.classList.remove("h4");
  headerTextEl.classList.toggle("question");
  displayQuestion();
  displayOptions();
  addNextButton();
}

function addNextButton(){
  let nextButtonEl = document.createElement("button");
  footerSectionEl.appendChild(nextButtonEl);
  nextButtonEl.className = 'next';
  nextButtonEl.textContent = 'Next'
}

function renderQnAState(){
  displayQuestion();
  clearOptions();
  displayOptions();
}


function renderLastQuestionState(){
  clearOptions();
}

function handleNextButtonClick(event) {
  if (event.target.classList.contains("next")) {
    counterSports++;
    renderQnAState();
    if (counterSports === sports.length - 1) {
      event.target.textContent = "Result";
    }
    if (counterSports === sports.length) {
      sectionEl.innerHTML = "";
    }
  }
}


/*----------------------------- Event Listeners -----------------------------*/

sportsButtonEl.addEventListener("click", handleSportsCategoryClick);
footerSectionEl.addEventListener('click', handleNextButtonClick);
