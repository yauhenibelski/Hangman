import Keyboard from '../core/components/keyboard/keyboard';
import Man from '../core/components/man/Man';
import SecretWord from '../core/components/secret-word/secret-word';
import Popup from '../core/components/popup/popup';
import Notice from '../core/components/notice/notice';

export const checkGameStatus = (l) => {
  const letter = l.toLowerCase();
  if (!(letter in Keyboard.elements)) return;

  const currentElement = Keyboard.elements[letter];
  const isShowLetter = SecretWord.showLetter(letter);

  if (!isShowLetter) Man.appendPartOfBody();

  if (Man.ifAllPartsAppend()) {
    Popup.run(new Notice('You Lost').getElement());
    document.onkeydown = null;
  }

  if (SecretWord.areAllLettersOpen()) {
    Popup.run(new Notice('Winner!').getElement());
  }

  Keyboard.changeKeyStyle(currentElement, isShowLetter);
};
