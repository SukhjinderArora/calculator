import * as math from 'mathjs';

let data = [];

export function evalExpression(expression) {
  try {
    return math.eval(expression);
  } catch (err) {
    return 'Syntax Error';
  }
}

export function addData(value) {
  data.push(value);
}

export function getData() {
  return data.join('');
}

export function clearData() {
  data = [];
}
