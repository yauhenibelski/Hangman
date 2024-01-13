import className from './secret-word.module.scss';
import Component from '../template/component';
import createElement from '../../../utils/create-element';

class SecretWord extends Component {
  constructor(secretWord) {
    super(className.secret_word);

    this.mark = '*';
    this.wordsElements = [];
    SecretWord.secretWord = secretWord;

    this.createComponent();

    SecretWord.showLetter = this.showLetter.bind(this);
    SecretWord.setNewSecretWord = this.setNewSecretWord.bind(this);
    SecretWord.areAllLettersOpen = this.areAllLettersOpen.bind(this);
  }

  createComponent() {
    [...SecretWord.secretWord].forEach(() => {
      const span = createElement({ tagName: 'span', text: this.mark, className: className.letter });

      this.wordsElements.push(span);
      this.container.append(span);
    });
  }

  showLetter(letter) {
    if (SecretWord.secretWord.toLowerCase().includes(letter.toLowerCase())) {
      this.wordsElements.forEach((elem, i) => {
        if (letter.toLowerCase() === SecretWord.secretWord[i].toLowerCase()) {
          elem.innerText = letter.toUpperCase();
        }
      });
      return true;
    }
    return false;
  }

  setNewSecretWord(newWord) {
    SecretWord.secretWord = newWord;
    this.wordsElements = [];
    this.render();
  }

  areAllLettersOpen() {
    return this.wordsElements.every((elem) => elem.innerText.toLowerCase() !== this.mark);
  }
}

export default SecretWord;
