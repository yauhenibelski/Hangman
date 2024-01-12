import createElement from '../../../utils/createElement';

class Component {
  constructor(className, tagName) {
    this.container = createElement({ tagName, className });
    this.contentContainer = createElement({ className: `${className}_content-container` });

    if (className) this.container.className = className;
  }

  // eslint-disable-next-line class-methods-use-this
  createComponent() {
    // create elements () => void
  }

  render() {
    this.container.innerHTML = '';
    this.contentContainer.innerHTML = '';

    this.createComponent();
  }

  getElement() {
    return this.container;
  }
}

export default Component;
