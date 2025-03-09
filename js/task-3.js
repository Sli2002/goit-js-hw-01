function getElementWidth(content, padding, border) {
  content = parseFloat(content);
  padding = parseFloat(padding);
  border = parseFloat(border);
  const element = content + 2 * padding + 2 * border;
  return element;
}

const getElement = getElementWidth("50px", "8px", "4px");
const getElement = getElementWidth("60px", "12px", "8.5px");
const getElement = getElementWidth("200px", "0px", "0px");

console.log(getElement);
