import Keyboard from '../core/components/keyboard/keyboard';
import Man from '../core/components/man/Man';
import SecretWord from '../core/components/secret-word/secret-word';

export const checkGameStatus = (l) => {
  const letter = l.toLowerCase();

  if (!(letter in Keyboard.elements)) return;

  const currentElement = Keyboard.elements[letter];

  if (SecretWord.showLetter(letter)) {
    currentElement.style.backgroundColor = 'rgba(111, 179, 102, 0.293)';
  } else {
    Man.appendPartOfBody();
    currentElement.style.backgroundColor = 'rgb(173, 173, 173)';
  }
  currentElement.onclick = null;
  currentElement.style.cursor = 'not-allowed';
};
