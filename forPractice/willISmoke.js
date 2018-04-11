let timeIWokeUp = 800;
let missedDays = 0;
let timesIWasLate = 0;

function didIMissTheTroli() {
	if((missedDays >= 2 || timesIWasLate >= 4) || timeIWokeUp > 800) {
		return 'no';
	} else if(missedDays < 2 || timesIWasLate < 4) {
		return 'yes';
	} else {
		return 'yes';
	}
}

function amILucky() {
	if (Math.random() > 0.5) {
		return true;
	} 
	else {
		return false;
	}
}

function didISleepTooMuch() {
	if (timeIWokeUp > 730) {
		return true;
	}
	else {
		return false;
	}
}

console.log(myFunction());