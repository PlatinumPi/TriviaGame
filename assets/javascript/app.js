var myQuestions = [
    {
        question: "What is the color of the sky?",
        answers: {
            a: 'Blue',
            b: 'Green',
            c: 'Purple',
            d: 'Yellow',
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is famous for their discovery of AC power?",
        answers: {
            a: 'Bernhard Riemann',
            b: 'Albert Einstein',
            c: 'Nikola Tesla',
            d: 'Harry Potter',
        },
        correctAnswer: 'c'
    },
    {
        question: "Where was the first Olympic Game held?",
        answers: {
            a: 'Rome',
            b: 'Norway',
            c: 'Athens',
            d: 'Iceland',
        },
        correctAnswer: 'c'
    },
    {
        question: "What's the capital of Colorado?",
        answers: {
            a: 'Colorado Springs',
            b: 'Denver',
            c: 'Pueblo',
            d: 'Greely',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 2 + 2 * 5?",
        answers: {
            a: '20',
            b: '13',
            c: '18',
            d: '12',
        },
        correctAnswer: 'd'
    },
    {
        question: "What was the first blue pigment for paint called?",
        answers: {
            a: 'Ultramarine',
            b: 'Aquamarine',
            c: 'Egyptian Blue',
            d: 'Royal Blue',
        },
        correctAnswer: 'c'
    },
    {
        question: "Who was the Fourth President of the United States?",
        answers: {
            a: 'Thomas Jefferson',
            b: 'George Washington',
            c: 'James Monroe',
            d: 'James Madison',
        },
        correctAnswer: 'd'
    },
    {
        question: "Plessy v. Fergusson was a Supreme Court Case about which of the following:",
        answers: {
            a: 'Giving Supreme Court ability to strike down laws, statutes and government actions',
            b: 'Denying African slaves citizenship',
            c: 'Seperating blacks and whites in schools',
            d: 'Seperate but equal segregation',
        },
        correctAnswer: 'd'
    },
    {
        question: "What famous composer is known for the composition 'Allegro'?",
        answers: {
            a: 'Ludwig Van Beethoven',
            b: 'Wolfgang Amadeus Mozart',
            c: 'Frédéric Chopin',
            d: 'Franz Liszt',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the term for a star that is beyond the Red Giant Phase?",
        answers: {
            a: 'Variable Star',
            b: 'White Dward',
            c: 'Red Dwarf',
            d: 'Exo-Star',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the known medical term for someone who has sufferd a collapsed lung?",
        answers: {
            a: 'Dyspnea',
            b: 'Pneumothorax',
            c: 'Pulmonary Metastases',
            d: 'Pulmonary Edema',
        },
        correctAnswer: 'b'
    },
    {
        question: "What chemical, in the breakdown of alcohol, causes a flushed face and vomitting?",
        answers: {
            a: 'Actin',
            b: 'Tryptophan',
            c: 'Acetaldehyde',
            d: 'Aspartate',
        },
        correctAnswer: 'c'
    },
    {
        question: "What is a mole?",
        answers: {
            a: 'A cute fuzzy rodent',
            b: 'Unit to define number of atoms in a substance',
            c: 'The amount of a substance which has the same chemical units as there are atoms in exactly 12 grams of pure carbon 12',
            d: 'The amount of a substance that has the same weight as 12 grams of pure carbon 12',
        },
        correctAnswer: 'c'
    },
    {
        question: "What does the term 'déjà vu' translate to in English? (The next answer is 'C')",
        answers: {
            a: 'Already seen',
            b: 'Already experienced',
            c: 'Repeated experience',
            d: 'Memory glitch',
        },
        correctAnswer: 'a'
    },
    {
        question: "Are you enjoying this test?",
        answers: {
            a: 'Yes',
            b: 'Yes',
            c: 'Yes',
            d: 'Yes',
        },
        correctAnswer: 'c'
    },
    {
        question: "What is a mole?",
        answers: {
            a: 'A cute fuzzy rodent',
            b: 'Unit to define number of atoms in a substance',
            c: 'The amount of a substance which has the same chemical units as there are atoms in exactly 12 grams of pure carbon 12',
            d: 'The amount of a substance that has the same weight as 12 grams of pure carbon 12',
        },
        correctAnswer: 'a'
    },
    {
        question: "A Jew, a Priest and a man walk into a strip club. Which is correct?",
        answers: {
            a: 'Moses v. Jesus the Porno',
            b: 'Nothing, they all drink a cup of tea.',
            c: 'JESUS CHRIST, he is the man',
            d: 'The Priest just divorced, the Jew saw money flying and the man had to pee',
        },
        correctAnswer: 'b'
    },
    {
        question: "Click the right button:",
        answers: {
            a: 'I am not the button',
            b: 'I am not the button',
            c: 'B is not the button',
            d: 'A is the button',
        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('trivia');
var resultsContainer = document.getElementById('answers');
var submitButton = document.getElementById('submit');
var hidden = document.getElementById('side');
var hiddenMain = document.getElementById('main');

hidden.style.display = 'none';

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {
                answers.push('<label class="container-check">' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + questions[i].answers[letter] + '<span class="checkmark"></span></label>');
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

        var percentCorrect;

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
        percentCorrect = Math.round((numCorrect / questions.length) * 100);

        var letterGrade = document.getElementById('letter-grade');
        var percantage = document.getElementById('percentage')

        percantage.append(percentCorrect + "%");

        if (percentCorrect <= 100 && percentCorrect >= 97) {

            letterGrade.append('A+');

        } 
        
        else if (percentCorrect < 97 && percentCorrect >= 94) {

            letterGrade.append('A');

        } 
        
        else if (percentCorrect < 94 && percentCorrect >= 90) {

            letterGrade.append('A-');

        } 
        
        else if (percentCorrect < 90 && percentCorrect >= 87) {

            letterGrade.append('B+');

        } 
        
        else if (percentCorrect < 87 && percentCorrect >= 84) {

            letterGrade.append('B');

        } 
        
        else if (percentCorrect < 84 && percentCorrect >= 80) {

            letterGrade.append('B-');

        } 
        
        else if (percentCorrect < 80 && percentCorrect >= 77) {

            letterGrade.append('C+');

        } 
        
        else if (percentCorrect < 77 && percentCorrect >= 74) {

            letterGrade.append('C');

        } 
        
        else if (percentCorrect < 74 && percentCorrect >= 70) {

            letterGrade.append('C-');

        } 
        
        else if (percentCorrect < 70 && percentCorrect >= 67) {

            letterGrade.append('D+');

        } 
        
        else if (percentCorrect < 67 && percentCorrect >= 64) {

            letterGrade.append('D');

        } 
        
        else if (percentCorrect < 64 && percentCorrect >= 60) {

            letterGrade.append('D-');

        } 
        
        else {

            letterGrade.append('F');

        }

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {

        stop();
        document.getElementById('submit').disabled = true;
        hidden.style.display = 'block';
        showResults(questions, quizContainer, resultsContainer);

    }

    var intervalId;
    var clockRunning = false;
    var time = (myQuestions.length) * 15;
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
            document.getElementById('submit').disabled = true;
            hidden.style.display = 'block';
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