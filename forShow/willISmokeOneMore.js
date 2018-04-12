let timeIWokeUp = 720;
let missedDays = 0;
let timesIWasLate = 0;

function willISmoke() {
	if(doICare() || amILate()) {
		return 'no i need to hurry';
	} else if (!doICare()) {
		return 'yay i will'
	} else {
		return 'ofc!'
	}
}

function doICare() {
	return missedDays >= 2 && timesIWasLate >= 4
}

function amILate() {
	if (timeIWokeUp < 800) {
		return false;
	} else {
		return didIMissTheTroli()
	}
}

function didIMissTheTroli() {
	return (didISleepTooMuch() && amILucky())
}

function amILucky() {
	return (Math.random() > 0.5)
}

function didISleepTooMuch() {
	return timeIWokeUp > 730
}

console.log(willISmoke());