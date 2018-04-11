let timeIWokeUp = 800;
let missedDays = 0;
let timesIWasLate = 0;

function willISmoke() {
	if(doICare() === true || amILate() === true) {
		return 'no, i need to hurry'
	} else if (doICare() === false) {
		return 'yes i will!'
	} else {
		return 'hell yes!'
	}
}

function doICare() {
	if((missedDays >= 2 || timesIWasLate >= 4)) {
		return true;
	} else {
		return false;
	}
}

function amILate() {
	if(timeIWokeUp < 800) {
		return false;
	} else {
		didIMissTheTroli()
	}
};

function didIMissTheTroli() {
	if(didISleepTooMuch()) {
		if (amILucky()=== false) {
			return true;
		}
	} else {
		return false;
	}
}

function amILucky() {
	if (Math.random() > 0.5) {
		return true;
	} else {
		return false;
	}
}

function didISleepTooMuch() {
	if (timeIWokeUp > 730) {
		return true;
	} else {
		return false;
	}
}

console.log(myFunction());