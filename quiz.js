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
        question: "Who is the current Black Caps coach?",
        answers: {
            a: 'Steve Hansen',
            b: 'Sir Peter Jackson',
            c: 'Mike Hesson',
            d: 'James Rendell'
        },
        correctAnswer: 'c'
    },
    {
        question: "In 1949, New Zealand sent one of its arguably best sides to play in England. Who was not in this lineup?",
        answers: {
            a: 'Bert Sutcliffe',
            b: 'Martin Donnelly',
            c: 'Kane Williamson',
            d: 'Jack Cowie'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who was the first bowler to reach 400 test wickets?",
        answers: {
            a: 'Richard Hadlee',
            b: 'Chris Cairns',
            c: 'Daniel Vettori',
            d: 'Trent Boult'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the correct spelling of the following player?",
        answers: {
            a: 'Chris Cairns',
            b: 'Kris Kenze',
            c: 'Cris Cairns',
            d: 'Kryse Karonze'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who won the ICC Cricket World Cup in 2011?",
        answers: {
            a: 'USA',
            b: 'New Zealand',
            c: 'Sri Lanka',
            d: 'India'
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
