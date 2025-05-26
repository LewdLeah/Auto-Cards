// Your "Context" tab should look like this
const modifier = (text) => {
  //
  // Ideally, your other context code goes above this line
  [text, stop] = AutoCards("context", text, stop);
  // Alternatively, you may also put it below this line
  //
  return {text, stop};
};
modifier(text);
