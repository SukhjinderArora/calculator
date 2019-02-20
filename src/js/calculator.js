import math from 'mathjs';
import elements from './base';

export const getResult = (input) => {
  try {
    return math.eval(input);
  } catch (error) {
    return 'Invalid Expression';
  }
};

export const setInput = (input) => {
  elements.input.value = input;
};

export const clearInput = () => {
  elements.input.value = '';
};
