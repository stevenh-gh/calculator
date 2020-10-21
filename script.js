const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, operator, b) => {
        a = Number(a);
        b = Number(b);

        // if (operator === 'divide' && b === 0) { return 'YOU CAN\'T DIVIDE BY ZERO'; }

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

let isPrevClickOperator = false;

let queue = [];
let answer;

buttons.forEach(button => {
        button.addEventListener('click', e => {
                let btnClass = e.target.parentElement.classList[1];

                switch (btnClass) {
                        case 'operand':
                                if (isPrevClickOperator) {
                                        console.log('in prevclick');
                                        input.value = '';
                                        isPrevClickOperator = false;
                                }
                                if (input.value.length !== 9) {
                                        if (input.value !== '0') {
                                                input.value += e.target.value;
                                        } else { input.value = e.target.value; }
                                }
                                break;
                        case 'operator':
                                isPrevClickOperator = true;
                                console.log(e.target.value);
                                queue.push(input.value);
                                queue.push(e.target.value);
                                console.log(queue);

                                if (queue.length > 3) {
                                        answer = operate(queue[0], queue[1], queue[2]);
                                        input.value = answer;
                                        queue = [answer, e.target.value];
                                }
                                break;
                        case 'equals':
                                queue.push(input.value);
                                console.log(queue);
                                answer = operate(queue[0], queue[1], queue[2]);
                                input.value = answer;
                                queue = [];
                                console.log(e.target.value);
                                isPrevClickOperator = true;
                                break;
                        case 'clear':
                                input.value = '0';
                                queue = [];
                                console.log(e.target.value);
                                break;
                }
        });
});