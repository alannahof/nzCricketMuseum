var Q = document.getElementById('Q');
var QA = document.getElementById('QA');
var QB = document.getElementById('QB');
var QC = document.getElementById('QC');
var QD = document.getElementById('QD');
var BA = document.getElementById('BA');
var BB = document.getElementById('BB');
var BC = document.getElementById('BC');
var BD = document.getElementById('BD');
var scoreText = document.getElementById('scoreText');
var submitBtn = document.getElementById('submitBtn');
var qNum = 0;
var score = 0;
var selected = 'e';


submitBtn.onclick = function()
{
	if (selected.valueOf() != 'e')
	{
		if (selected.valueOf() == questions[qNum].correctAnswer.valueOf())
		{
			score = score + 1;
		}
		selected = 'e';
		qNum = qNum + 1;
		if (qNum < questions.length)
		{
			populateQuestions();
		}
		scoreText.innerText = score + '/' + qNum;
	}
}

BA.onclick = function()
{
	selected = 'a';
}

BB.onclick = function()
{
	selected = 'b';
}

BC.onclick = function()
{
	selected = 'c';
}

BD.onclick = function()
{
	selected = 'd';
}

var questions = [
    {
        question: "How many cricket players suck?",
        answers: {
            a: '20',
            b: '30',
            c: '40',
            d: '69'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many cricket players do you personally know not excluding family members?",
        answers: {
            a: '0 Bro',
            b: '600',
            c: '1000',
            d: '1600'
            
        },
        correctAnswer: 'b'
    },
    {
        question: "How many cricket?",
        answers: {
            a: '10',
            b: '40',
            c: '90',
            d: '5'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who Cricket Play?",
        answers: {
            a: 'John',
            b: 'Key',
            c: 'Flavour',
            d: 'Jesse'
        },
        correctAnswer: 'd'
    }
]

function populateQuestions()
{
	Q.innerText = questions[qNum].question;
	QA.innerText = questions[qNum].answers.a;
	QB.innerText = questions[qNum].answers.b;
	QC.innerText = questions[qNum].answers.c;
	QD.innerText = questions[qNum].answers.d;
}

populateQuestions();

;