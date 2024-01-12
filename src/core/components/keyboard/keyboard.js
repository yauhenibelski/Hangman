import { checkGameStatus } from '../../../utils/check-game-status';
import createElement from '../../../utils/create-element';

import Component from '../template/component';
import CLASS from './keyboard.module.scss';

class Keyboard extends Component {
  constructor() {
    super(CLASS.keyboard);

    Keyboard.elements = {};
    this.createComponent();
    document.onkeydown = (e) => checkGameStatus(e.key);
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
  }
}

export default Keyboard;
