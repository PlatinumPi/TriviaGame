var myQuestions = [
    {
        question: "What is the color of the sky?",
        answers: {
            a: 'green',
            b: 'blue',
            c: 'purple'
        },
        correctAnswer: 'b'
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
                answers.push('<label class="container-check">' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter] + '<span class="checkmark"></span></label>');
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
        showResults(questions, quizContainer, resultsContainer);
    }

}

var display = document.getElementById('display');
display.append('00:00');

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