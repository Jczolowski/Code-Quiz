const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let randomQuestions , currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



const questions = [ {
    question: 'What is Java-script?',
    answers: [
        {text: 'A programming language'},
        {text: 'A key element in building websites'},
        {text: 'What is making this quiz work'},
        {text: 'All of the above' , correct: true}
    
    
    
    
    
    
    
    ]


}]


startButton.addEventListener('click' , startGame)











//start game

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

//Go to next question

function goToNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

}



//Check user guess

function playerGuess() {

}


