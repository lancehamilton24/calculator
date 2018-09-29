<<<<<<< HEAD:Javascripts/components/calculator.js
import {printToDom} from  '../helpers/util.js';
import {multiply, divide, add, subtract} from '../helpers/maths.js';
// import {divide} from '../helpers/maths.js';
=======
<<<<<<< HEAD
const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};
>>>>>>> master:main.js



const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType){
        case 'multiply':
            answer = multiply(num1, num2);
            break;
        case 'divide':
           answer = divide(num1, num2); 
            break;
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
            break;
        default:
            answer = 'nope';
    }
   printToDom(answer, 'result');
};

export {calculate};



<<<<<<< HEAD:Javascripts/components/calculator.js
// console.log(calculate(4, 2, 'multiply')); 
=======
// console.log(calculate(4, 2, 'multiply')); 
=======
console.log("hello world");
>>>>>>> 1bc51b4b7132d8acd982ebae1305ff8c676b1381
>>>>>>> master:main.js
