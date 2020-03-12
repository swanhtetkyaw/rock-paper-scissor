let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');

const result_div = document.querySelector('#result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

//advence AI @@ return one of the three value
function getComputerChoice() {
	const choices = [ 'r', 'p', 's' ];
	//return random number between 0 to 3
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

//convert the letters to word
function changeWord(letter) {
	if (letter == 'r') return 'Rock';
	if (letter == 'p') return 'Paper';
	return 'Scissor';
}
//generate small word
function smallWord(word) {
	return word.fontsize(3).sub();
}

//function of the game
function win(userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	let userChoice_div = document.getElementById(userChoice);
	result_div.innerHTML = `${changeWord(userChoice)}${smallWord('user')} beats ${changeWord(compChoice)}${smallWord(
		'comp'
	)}`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => {
		userChoice_div.classList.remove('green-glow');
	}, 300);
}

function lose(userChoice, compChoice) {
	compScore++;
	compScore_span.innerHTML = compScore;
	let userChoice_div = document.getElementById(userChoice);
	result_div.innerHTML = `${changeWord(userChoice)}${smallWord('user')} Lose To ${changeWord(compChoice)}${smallWord(
		'comp'
	)}`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => {
		userChoice_div.classList.remove('red-glow');
	}, 300);
}

function draw(userChoice, compChoice) {
	let userChoice_div = document.getElementById(userChoice);
	result_div.innerHTML = `${changeWord(userChoice)}${smallWord('user')} Draw ${changeWord(compChoice)}${smallWord(
		'comp'
	)}`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => {
		userChoice_div.classList.remove('gray-glow');
	}, 300);
}

//get both userchoice and computerchoice and let begin the game
function game(userChoice) {
	const compChoice = getComputerChoice();
	console.log(userChoice + compChoice);
	switch (userChoice + compChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, compChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, compChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, compChoice);
			break;
	}
}

//main EventListener
function main() {
	rock_div.addEventListener('click', function() {
		game('r');
	});

	paper_div.addEventListener('click', function() {
		game('p');
	});

	scissor_div.addEventListener('click', function() {
		game('s');
	});
}

main();
