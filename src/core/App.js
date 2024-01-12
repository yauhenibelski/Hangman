import createElement from '../utils/createElement';
import Man from './components/man/Man';
import SecretWord from './components/secret-word/secret-word';

class App {
  container = document.body;

  run() {
    const testBtn = createElement({ tagName: 'button', text: 'Test' });
    testBtn.onclick = () => {
      Man.appendPartOfBody();
      SecretWord.showLetter('w');
    };

    this.container.append(testBtn);
    this.container.append(new Man().getElem());
    this.container.append(new SecretWord('abdwfwgfgw').getElement());
  }
}

export default App;
