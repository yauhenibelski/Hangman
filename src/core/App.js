import Keyboard from './components/keyboard/keyboard';
import Man from './components/man/Man';
import SecretWord from './components/secret-word/secret-word';

class App {
  container = document.body;

  run() {
    this.container.append(...[
      new Man().getElem(),
      new SecretWord('evgenij').getElement(),
      new Keyboard().getElement(),
    ]);
  }
}

export default App;
