function getElementWidth(content, padding, border) {
  content = parseFloat(content);
  padding = parseFloat(padding);
  border = parseFloat(border);
  const element = content + 2 * padding + 2 * border;
  return element;
}

const getElement1 = getElementWidth("50px", "8px", "4px");
console.log(getElement1);
const getElement2 = getElementWidth("60px", "12px", "8.5px");
console.log(getElement2);
const getElement3 = getElementWidth("200px", "0px", "0px");
console.log(getElement3);
