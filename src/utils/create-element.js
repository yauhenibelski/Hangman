function createElement(obj = {}) {
  const { tagName, className, text } = obj;
  const elem = document.createElement(`${tagName ?? 'div'}`);

  if (className) elem.classList.add(`${className}`);
  if (text) elem.innerText = `${text}`;

  return elem;
}

export default createElement;
