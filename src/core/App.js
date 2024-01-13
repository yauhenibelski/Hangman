// import createElement from '../utils/create-element';
import createElement from '../utils/create-element';
import Keyboard from './components/keyboard/keyboard';
import Man from './components/man/Man';
import Question from './components/question/question';
import Quiz from './components/quiz';
import SecretWord from './components/secret-word/secret-word';

class App {
  container = document.body;

  appContainer = createElement({ className: 'app' });

  run() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('The game in English use EN keyboard layout.');
    console.log('---');

    Quiz.shakeQuiz();
    const { answer, question } = Quiz.getQuiz();

    console.log(`Answer: ${answer}`);
    console.log('---');

    this.appContainer.append(...[
      new Man().getElem(),
      new Question(question).getElement(),
      new SecretWord(answer).getElement(),
      new Keyboard().getElement(),
    ]);
    this.container.append(this.appContainer);
  }
}

export default App;
