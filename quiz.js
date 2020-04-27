var questions = 
var score = 0;

for (vari=0; i < q  questions.length; i++) {
    var guess = window.prompt(questions[i].prompt);
    if(guess == questions[i].answer) {
        score ++;
        alert("correct!");
    }
    else {
        alert("wrong");
    }
}
alert("you got" + score + "/" + questions.length)