import Component from '../template/component';
import CLASS from './popup.module.scss';

class Popup extends Component {
  constructor(content) {
    super(CLASS.popup);
    this.content = content;
    Popup.elem = this;
  }

  static run = (content) => document.body.append(new Popup(content).render());

  remove() {
    this.container.style.opacity = 0;
    document.body.style.overflow = '';
    setTimeout(() => { this.container.remove(); }, 200);
  }

  createPopup() {
    this.container.style.opacity = 0;
    this.container.append(this.content);
    document.body.style.overflow = 'hidden';

    this.content.onclick = (elem) => elem.stopPropagation();
    this.container.onclick = () => this.remove();

    setTimeout(() => {
      this.container.style = '';
    }, 100);
  }

  render() {
    this.createPopup();
    return this.container;
  }
}

export default Popup;
