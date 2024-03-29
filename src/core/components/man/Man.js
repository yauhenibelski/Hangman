import createElement from '../../../utils/create-element';
import gallows from '../../../assets/gallowsSVG.svg';
import CLASS from './man.module.scss';

class Man {
  constructor() {
    this.container = createElement();
    this.container.classList.add(CLASS.man_container);
    this.counter = createElement({ tagName: 'h3', className: CLASS.counter });

    fetch(gallows)
      .then((svg) => svg.text())
      .then((svgCode) => {
        this.container.innerHTML = svgCode;
        this.container.append(this.counter);
        this.setCounter();
      });

    this.body = {
      HEAD: this.createBody('circle', {
        'shape-rendering': 'crispEdges', cx: '430', cy: '116', r: '33', troke: 'blac',
      }, '10'),
      BONE: this.createBody('line', {
        x1: '428', y1: '271', x2: '428', y2: '150',
      }, '5'),
      L_ARM: this.createBody('line', {
        x1: '387.161', y1: '260.214', x2: '428.161', y2: '164.214',
      }, '9'),
      R_ARM: this.createBody('line', {
        x1: '476.211', y1: '261.894', x2: '428.211', y2: '165.894',
      }, '7'),
      L_LEG: this.createBody('line', {
        x1: '387.161', y1: '361.214', x2: '428.161', y2: '270',
      }, '8'),
      R_LEG: this.createBody('line', {
        x1: '476.211', y1: '362.894', x2: '428.211', y2: '266.894',
      }, '6'),
    };

    Man.appendPartOfBody = this.appendPartOfBody.bind(this);
    Man.ifAllPartsAppend = this.ifAllPartsAppend.bind(this);
    Man.clearGallows = this.clearGallows.bind(this);
  }

  numAddedPart = 0;

  setCounter() {
    this.counter.innerText = `Mistakes: ${this.numAddedPart} / ${Object.keys(this.body).length}`;
  }

  clearGallows() {
    this.numAddedPart = 0;
    this.setCounter();
    Object.values(this.body).forEach((svgElem) => svgElem.remove());
  }

  createBody(type, props, filter) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const elemContainer = document.createElementNS(xmlns, 'g');
    const elem = document.createElementNS(xmlns, type);

    elemContainer.setAttributeNS(null, 'filter', `url(#filter${filter}_d_9_20)`);
    elem.setAttributeNS(null, 'stroke', 'black');
    elem.setAttributeNS(null, 'stroke-width', '8');

    Object.entries(props).forEach((prop) => {
      const [name, value] = prop;
      elem.setAttribute(name, value);
    });

    elemContainer.append(elem);
    return elemContainer;
  }

  appendPartOfBody() {
    const bodyKeys = Object.keys(this.body);

    if (this.numAddedPart >= bodyKeys.length) return;

    this.numAddedPart += 1;
    this.container.firstChild.append(this.body[bodyKeys[this.numAddedPart - 1]]);

    this.setCounter();
  }

  getElem = () => this.container;

  ifAllPartsAppend() {
    return this.numAddedPart === Object.keys(this.body).length;
  }
}

export default Man;
