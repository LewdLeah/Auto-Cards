// Your "Context" tab should look like this
const modifier = (text) => {
  [text, stop] = AutoCards("context", text, stop);
  text = text.replace(/^[\s\S]*?(?=-----)/, "\n");
  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }
  return {text, stop};
};
modifier(text);
