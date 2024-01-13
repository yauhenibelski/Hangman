// import createElement from '../utils/create-element';
import Keyboard from './components/keyboard/keyboard';
import Man from './components/man/Man';
import Quiz from './components/quiz';
import SecretWord from './components/secret-word/secret-word';

class App {
  container = document.body;

  run() {
    // const b = createElement({tagName: 'button', text: 'test'})
    // b.onclick = () => {
    //   console.log(Quiz.getQuiz())
    // }

    Quiz.shakeQuiz();
    const { answer, question } = Quiz.getQuiz();
    console.log('Quiz', Quiz.data);
    this.container.append(...[
      // b,
      new Man().getElem(),
      // createElement({text: question}),
      new SecretWord(answer).getElement(),
      new Keyboard().getElement(),
    ]);
  }
}

export default App;
