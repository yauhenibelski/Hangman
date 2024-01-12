import createElement from '../utils/createElement';
import Man from './ components/man/Man';

class App {
  container = document.body;

  run() {
    const testBtn = createElement({ tagName: 'button', text: 'Test' });
    testBtn.onclick = () => {
      Man.appendPartOfBody();
    };

    this.container.append(testBtn);

    const man = new Man().getElem();
    this.container.append(man);
  }
}

export default App;
