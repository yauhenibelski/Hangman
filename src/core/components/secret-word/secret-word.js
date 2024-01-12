import className from './secret-word.module.scss';
import Component from '../template/component';
import createElement from '../../../utils/create-element';

class SecretWord extends Component {
  constructor(secretWord) {
    super(className.secret_word);

    this.mark = '*';
    this.secretWord = secretWord;
    this.wordsElements = [];
    this.createComponent();

    SecretWord.showLetter = this.showLetter.bind(this);
    SecretWord.setNewSecretWord = this.setNewSecretWord.bind(this);
    SecretWord.areAllLettersOpen = this.areAllLettersOpen.bind(this);
  }

  createComponent() {
    [...this.secretWord].forEach(() => {
      const span = createElement({ tagName: 'span', text: this.mark, className: className.letter });

      this.wordsElements.push(span);
      this.container.append(span);
    });
  }

  showLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.wordsElements.forEach((elem, i) => {
        if (letter.toLowerCase() === this.secretWord[i].toLowerCase()) {
          elem.innerText = letter.toUpperCase();
        }
      });
      return true;
    }
    return false;
  }

  setNewSecretWord(newWord) {
    this.secretWord = newWord;
    this.wordsElements = [];
    this.render();
    this.createComponent();
  }

  areAllLettersOpen() {
    return this.wordsElements.every((letter) => letter !== this.mark);
  }
}

export default SecretWord;
