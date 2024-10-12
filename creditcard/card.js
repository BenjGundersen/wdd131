function isCardNumberValid(number) {
	return number === '1234123412341234'
}

const monthInput = document.getElementById("exp-mm");
const yearInput = document.getElementById("exp-yr");

function isDateValid() {
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;

    if (year > currentYear || (year === currentYear && month > currentMonth)) {
        console.log('Valid date');
        return true;
    } else {
        console.log('Invalid date. Please enter a future date.');
        return false;
    }
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''

	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('')

	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}

	if (isDateValid() == false) {
		errorMsg += 'Invalid date. Please enter a future date.\n'
	}

	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#creditcard').addEventListener('submit', submitHandler)