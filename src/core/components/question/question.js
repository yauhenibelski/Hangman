import createElement from '../../../utils/create-element';
import Component from '../template/component';
import CLASS from './question.module.scss';

class Question extends Component {
  constructor(question) {
    super(CLASS.question);

    this.question = question;

    this.createComponent();

    Question.getQuestion = this.getQuestion.bind(this);
    Question.setQuestion = this.setQuestion.bind(this);
  }

  getQuestion() {
    return this.question;
  }

  setQuestion(question) {
    this.question = question;
    this.render();
  }

  createComponent() {
    const h2 = createElement({ tagName: 'h3', text: this.question });

    this.container.append(h2);
  }
}

export default Question;
