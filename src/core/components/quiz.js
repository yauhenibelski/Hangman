class Quiz {
  static currentQuizIndex = 0;

  static shakeQuiz() {
    Quiz.data.sort(() => ((Math.random() > 0.5) ? 1 : -1));
    Quiz.currentQuizIndex = 0;
  }

  static getQuiz() {
    Quiz.data[Quiz.currentQuizIndex + 1] ? Quiz.currentQuizIndex += 1 : Quiz.currentQuizIndex = 0;
    return Quiz.data[Quiz.currentQuizIndex];
  }

  static data = [
    {
      question: 'Which African country is the most populous?',
      answer: 'Nigeria',
    },
    {
      question: 'The more you take, the more you leave behind. What am I?',
      answer: 'Footsteps',
    },
    {
      question: 'I\'m not alive, but I can grow; I don\'t have lungs, but I need air. What am I?',
      answer: 'Fire',
    },
    {
      question: 'I\'m always in front of you, but can never be seen. What am I?',
      answer: 'future',
    },
    {
      question: 'A common pet that says "meow."',
      answer: 'Cat',
    },
    {
      question: ' A small, sweet fruit often associated with summer.',
      answer: 'Strawberry',
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      answer: 'Shakespeare',
    },
    {
      question: 'What is the capital of Australia?',
      answer: 'Canberra',
    },
    {
      question: 'What is the only planet in our solar system that rotates clockwise?',
      answer: 'Venus',
    },
    {
      question: 'In music, what is the term for a rapid sequence of musical tones?',
      answer: 'Arpeggio',
    },
  ];
}

export default Quiz;
