const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
	switch (operator) {
		case 'add': return add(a, b);
		case 'subtract': return subtract(a, b);
		case 'multiply': return multiply(a, b);
		case 'divide': return divide(a, b);
	}
};

const btnContainer = document.querySelector('#btn-container');
const buttons = btnContainer.querySelectorAll('.buttons');
const input = document.querySelector('input');
input.value = 0;

buttons.forEach(button => {
	button.addEventListener('click', e => {
		if (input.value !== '0') {
			input.value += e.target.value;
		} else { input.value = e.target.value; }
	});
});