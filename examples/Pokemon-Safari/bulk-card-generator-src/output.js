// Your "Output" tab should look like this
const modifier = (text) => {
  text = AutoCards("output", text);
  state.inhibit = false;
  return {text};
};
modifier(text);
