const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let randomQuestions, currentQuestionIndex

startButton.addEventListener('click' , startGame)

//start game
function startGame() {
    console.log('init')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
   setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

//show questions
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


// select answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
}


//timer
function countDown() {}



//store score and name

















//array of questions

const questions = [
    {
      question: 'What is Javascript?',
      answers: [
        { text: 'A high level programing language', correct: true },
        { text: 'A language only baristas understand', correct: false },
        { text: 'Nobody really knows' , correct:false },
        { text: 'A writing app' , correct:false}
      ]
    },
    {
      question: 'Whats the most popular Javascript library?',
      answers: [
        { text: 'Jquery', correct: true },
        { text: 'Verge3d', correct: true },
        { text: 'midori', correct: true },
        { text: 'Alexandria ', correct: true }
      ]
    },
    {
      question: 'Who invented Javascript?',
      answers: [
        { text: 'Bill Gates', correct: false },
        { text: 'Brendan Eich', correct: true },
        { text: 'Liam Neeson', correct: false },
        { text: 'Elon Musk', correct: false }
      ]
    },
    {
      question: 'What is a "boolean" ?',
      answers: [
        { text: 'A prototype from Tesla', correct: false },
        { text: 'A true or false statement', correct: true },
        { text: 'a 12th century tortue device', correct: false },
        { text: 'A recently extinct fish ', correct: true }
      ]
    },
    {
        question: 'How do you generate a random number?',
        answers: [
          { text: 'math.Random', correct: false },
          { text: 'math.0.random', correct: true },
          { text: 'random/math', correct: true },
          { text: 'mathx.rando.gen', correct: true }
        ]
      },
      {
        question: 'What does "DOM" stand for?',
        answers: [
          { text: 'Damage On Model', correct: false },
          { text: 'Domain Object Model ', correct: true },
          { text: 'Detail Object Master', correct: false },
          { text: 'Data Overt Magnetometers', correct: false }
          
        ]
      },
      {
        question: 'What does JSON stand for?"?',
        answers: [
          { text: 'A high level programing language', correct: true },
          { text: 'A language only baristas understand', correct: false },
          { text: ' ' , correct:false },
          { text: '22' , correct:false}
        ]
      },
      {
        question: 'What is an "onClick" event?',
        answers: [
          { text: 'A high level programing language', correct: true },
          { text: 'A language only baristas understand', correct: false },
          { text: ' ' , correct:false },
          { text: '22' , correct:false}
        ]
      },
      {
        question: 'Which one of these is a string ?',
        answers: [
          { text: 'A high level programing language', correct: true },
          { text: 'A language only baristas understand', correct: false },
          { text: ' ' , correct:false },
          { text: '22' , correct:false}
        ]
      }
  ]
