import { checkGameStatus } from '../../../utils/check-game-status';
import createElement from '../../../utils/create-element';
import Component from '../template/component';
import CLASS from './keyboard.module.scss';

class Keyboard extends Component {
  constructor() {
    super(CLASS.keyboard);

    Keyboard.elements = {};
    Keyboard.render = this.render.bind(this);

    this.createComponent();
  }

  static changeKeyStyle(elem, val) {
    const currentElement = elem;

    val
      ? currentElement.style.backgroundColor = 'rgba(111, 179, 102, 0.293)'
      : currentElement.style.backgroundColor = 'rgba(118, 118, 118, 0.32)';

    currentElement.onclick = null;
    currentElement.style.cursor = 'not-allowed';
  }

  createComponent() {
    for (let i = 65; i <= 90; i += 1) {
      const letter = String.fromCharCode(i).toLowerCase();
      const span = createElement({
        tagName: 'span',
        text: String.fromCharCode(i),
        className: CLASS.key,
      });

      span.onclick = () => checkGameStatus(letter);

      Keyboard.elements[letter] = span;
      this.container.append(span);
    }
    document.onkeydown = (e) => checkGameStatus(e.key);
  }
}

export default Keyboard;
