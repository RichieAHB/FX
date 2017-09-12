const focusEnd = (input, focus = true) => {
  if (focus) {
    input.focus();
  }
  const val = input.value;
  input.value = '';
  input.value = val;
};

export {
  focusEnd,
};