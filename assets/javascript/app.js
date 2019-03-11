var myQuestions = [
    {
        question: "What is the color of the sky?",
        answers: {
            a: 'Blue',
            b: 'Green',
            c: 'Purple'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is famous for their discovery of AC power?",
        answers: {
            a: 'Bernhard Riemann',
            b: 'Albert Einstein',
            c: 'Nikola Tesla'
        },
        correctAnswer: 'c'
    },
    {
        question: "Where was the first Olympic Game held?",
        answers: {
            a: 'Rome',
            b: 'Norway',
            c: 'Athens',
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('trivia');
var resultsContainer = document.getElementById('answers');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {
                answers.push('<label class="container-check">' + '<input type="radio" name="question' + i + '" value="' + letter + '" class="listen">' + questions[i].answers[letter] + '<span class="checkmark"></span></label>');
            }

            output.push('<div class="question"><h2>' + questions[i].question + '</h2></div>'
                + '<div class="answers">' + answers.join('') + '</div>');
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;

                answerContainers[i].style.color = 'green';

            }

            else {

                answerContainers[i].style.color = 'red';

            }

        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {

        stop();
        showResults(questions, quizContainer, resultsContainer);

    }

    var intervalId;
    var clockRunning = false;
    var time = (myQuestions.length) * 6;
    var timeLeft = timeConverter(time);

    var display = document.getElementById('display');
    display.append(timeLeft);

    function start() {

        clockRunning = true;
        intervalId = setInterval(count, 1000);

    }
    start();

    function stop() {

        clearInterval(intervalId);
        clockRunning = false;

    }

    function count() {

        time--;

        var currentTime = timeConverter(time);

        var update = document.getElementById('display');
        update.innerHTML = "";
        update.append(currentTime);
        if (currentTime == '00:00') {
            stop();
            showResults(questions, quizContainer, resultsContainer);
        }

    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {

            seconds = '0' + seconds;

        }

        if (minutes === 0) {

            minutes = '00';

        }

        else if (minutes < 10) {

            minutes = '0' + minutes;

        }

        return minutes + ":" + seconds;
    }

}