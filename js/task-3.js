function getElementWidth(content, padding, border) {
  const content = parseFloat(content);
  const padding = parseFloat(padding);
  const border = parseFloat(border);
  const getElementWidth = content + 2 * padding + 2 * border;
  console.log(getElementWidth);
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
