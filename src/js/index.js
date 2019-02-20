import '@babel/polyfill';

import elements from './base';
import * as calculator from './calculator';

let input = [];

const btnHandler = (event) => {
  if (event.target.dataset.value === '=') {
    const inputString = input.join('');
    if (inputString !== '') {
      const result = calculator.getResult(inputString);
      calculator.setInput(result);
      input = [];
      if (result !== 'Invalid Expression') input.push(result);
    }
  } else if (event.target.dataset.value === 'ac') {
    input = [];
    calculator.clearInput();
  } else {
    input.push(event.target.dataset.value);
    const inputString = input.join('');
    calculator.setInput(inputString);
  }
};

elements.buttons.forEach(btn => btn.addEventListener('click', btnHandler));
