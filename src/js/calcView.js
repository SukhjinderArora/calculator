import elements from './base';

export const setInput = (value) => {
  elements.inputLower.value = value;
};

export const clearInput = () => {
  elements.inputLower.value = '';
};
