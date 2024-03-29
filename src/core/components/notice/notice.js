import createElement from '../../../utils/create-element';
import { restartGame } from '../../../utils/restart-game';
import SecretWord from '../secret-word/secret-word';
import Component from '../template/component';
import CLASS from './notice.module.scss';

class Notice extends Component {
  constructor(notice) {
    super(CLASS.notice);

    this.notice = notice;
    this.createComponent();
  }

  createComponent() {
    const noticeText = createElement({ tagName: 'h2', text: this.notice });
    const text = createElement({ tagName: 'h3', text: 'Secret word is' });
    const secretWord = createElement({
      tagName: 'h3',
      text: SecretWord.secretWord[0].toUpperCase() + SecretWord.secretWord.slice(1),
      className: CLASS.secret_word,
    });
    const btn = createElement({ tagName: 'button', text: 'Play again' });

    btn.onclick = () => restartGame();

    this.container.append(...[
      noticeText,
      text,
      secretWord,
      btn,
    ]);
  }
}

export default Notice;
