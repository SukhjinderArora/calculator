import '@babel/polyfill';

import '../styles/main.scss';
import elements from './base';
import * as calcModel from './calcModel';
import * as calcView from './calcView';

let value = '';

function getResult() {
  const expression = calcModel.getData();
  return calcModel.evalExpression(expression);
}

function btnClickHandler(event) {
  if (this.classList.contains('btn--equal')) {
    value = getResult();
    calcModel.clearData();
    calcModel.addData(value);
  } else if (this.classList.contains('btn--ac')) {
    calcModel.clearData();
    calcView.clearInput();
    value = '';
  } else {
    calcModel.addData(this.dataset.value);
    value += this.dataset.value;
  }
  calcView.setInput(value);
}

elements.buttons.forEach(btn => btn.addEventListener('click', btnClickHandler));
