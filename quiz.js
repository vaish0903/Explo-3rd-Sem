function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Which of the following term does not involve in ideal gas law?", ["Pressure", "Volume","Temperature", "Time"], "Time"),
    new Question("What is the shape of a P-T curve for ideal gas?", ["Straight line", "Parabolic", "Hyperbolic", "Ellipse"], "Straight line"),
    new Question("What is the Temperature of a 2 l/mol ideal gas with pressure 10 atm?", ["243.6K", "268.4K","289.1K", "313.5K"], "243.6K"),
    new Question("What is the compressibility factor of an ideal gas?", ["One", "Zero", "Infinite", "Depends on P and V"], "One"),
    new Question("In an ideal gas, if the gas constant R=0.082, what is the unit of R?", ["L.atm/K.mol", "J/K.mol", "J/K", "J/mol"], "L.atm/K.mol"),
    new Question("First of the two ideal gases has twice molar volume as much as the second at same temperature, what is the ratio of their pressures?", ["4:1", "1:4", "2:1", "1:2"], "1:2")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();