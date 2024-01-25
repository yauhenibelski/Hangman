import Keyboard from '../core/components/keyboard/keyboard';
import Man from '../core/components/man/Man';
import Popup from '../core/components/popup/popup';
import SecretWord from '../core/components/secret-word/secret-word';
import Quiz from '../core/components/quiz';
import Question from '../core/components/question/question';

export const restartGame = () => {
  const { answer, question } = Quiz.getQuiz();
  Popup.remove();
  Keyboard.render();
  Man.clearGallows();
  SecretWord.setNewSecretWord(answer);
  Question.setQuestion(question);
};
