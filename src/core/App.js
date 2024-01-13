// import createElement from '../utils/create-element';
import Keyboard from './components/keyboard/keyboard';
import Man from './components/man/Man';
import Question from './components/question/question';
import Quiz from './components/quiz';
import SecretWord from './components/secret-word/secret-word';

class App {
  container = document.body;

  run() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('The game in English use EN keyboard layout.');
    Object.values(Quiz.data).forEach((val) => {
      const { answer, question } = val;
      console.log('---');
      console.log(`Question: ${question}`);
      console.log(`Answer: ${answer}`);
    });

    Quiz.shakeQuiz();
    const { answer, question } = Quiz.getQuiz();

    this.container.append(...[
      new Man().getElem(),
      new Question(question).getElement(),
      new SecretWord(answer).getElement(),
      new Keyboard().getElement(),
    ]);
  }
}

export default App;
