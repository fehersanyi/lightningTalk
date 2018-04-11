let timeIWokeUp = 800;
let missedDays = 0;
let timesIWasLate = 0;

function myFunction() {
	//too much?
	if (timeIWokeUp > 730) {
	//yes
		//did i miss it?
		//am i lucky?
		//no
		if (Math.random() > 0.5) {
			//do i care?
			if((missedDays >= 2 || timesIWasLate >= 4) || timeIWokeUp > 800) {
				return 'no';
				//or do i?
			} else if(missedDays < 2 || timesIWasLate < 4) {
				return 'yes';
				// or do i?
			} else {
				return 'yes';
			}
			//am i late?
		} 
		// no
		else {
			return 'yes'
		}
	}
	// no i dont
	else {
		//did i miss the bus?
		return 'yes';
	}
}

console.log(myFunction());