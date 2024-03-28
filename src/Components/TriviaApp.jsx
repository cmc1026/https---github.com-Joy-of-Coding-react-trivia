// Trivia.jsx

import React, { useState } from 'react';

// an array of questions and answers
const questions = [
 
    {
      question: 'Who is known as the "King of Rock and Roll"?',
      options: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly', 'Little Richard'],
      correctAnswer: 'Elvis Presley'
    },
    {
      question: 'What band released the album "The Dark Side of the Moon"?',
      options: ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones'],
      correctAnswer: 'Pink Floyd'
    },
    {
      question: 'Which guitarist is known for setting his guitar on fire during performances?',
      options: ['Eric Clapton', 'Jimi Hendrix', 'Jimmy Page', 'Eddie Van Halen'],
      correctAnswer: 'Jimi Hendrix'
    },
    {
      question: 'Who wrote and originally recorded the song "Johnny B. Goode"?',
      options: ['Chuck Berry', 'Elvis Presley', 'Little Richard', 'Buddy Holly'],
      correctAnswer: 'Chuck Berry'
    },
    {
      question: 'Which rock band had a hit with the song "Stairway to Heaven"?',
      options: ['Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who'],
      correctAnswer: 'Led Zeppelin'
    },
    {
      question: 'Who was the lead singer of the band Queen?',
      options: ['Freddie Mercury', 'Robert Plant', 'Mick Jagger', 'David Bowie'],
      correctAnswer: 'Freddie Mercury'
    },
    {
      question: 'Which rock band performed the song "Bohemian Rhapsody"?',
      options: ['Queen', 'The Beatles', 'The Doors', 'AC/DC'],
      correctAnswer: 'Queen'
    },
    {
      question: 'Who was the drummer for the band "The Who"?',
      options: ['Keith Moon', 'John Bonham', 'Ringo Starr', 'Charlie Watts'],
      correctAnswer: 'Keith Moon'
    },
    {
      question: 'What is the name of Bruce Springsteen\'s E Street Band?',
      options: ['The Heartbreakers', 'The Silver Bullet Band', 'The Revolution', 'The E Street Band'],
      correctAnswer: 'The E Street Band'
    },
    {
      question: 'Who was known as the "Quiet Beatle"?',
      options: ['John Lennon', 'George Harrison', 'Paul McCartney', 'Ringo Starr'],
      correctAnswer: 'George Harrison'
    },
    {
      question: 'Which rock band released the album "Back in Black"?',
      options: ['AC/DC', 'Guns N\' Roses', 'Van Halen', 'Metallica'],
      correctAnswer: 'AC/DC'
    },
    {
      question: 'Who was the lead guitarist of the band "Queen"?',
      options: ['Brian May', 'Angus Young', 'Jimi Hendrix', 'Slash'],
      correctAnswer: 'Brian May'
    },
    {
      question: 'What is the real name of the musician known as "The Edge" from U2?',
      options: ['David Evans', 'Paul Hewson', 'Larry Mullen Jr.', 'Adam Clayton'],
      correctAnswer: 'David Evans'
    },
    {
      question: 'Which rock band had a hit with the song "Hotel California"?',
      options: ['Eagles', 'Led Zeppelin', 'The Doors', 'The Rolling Stones'],
      correctAnswer: 'Eagles'
    },
    {
      question: 'Who was the lead singer of the band "The Doors"?',
      options: ['Jim Morrison', 'Roger Daltrey', 'Mick Jagger', 'David Bowie'],
      correctAnswer: 'Jim Morrison'
    },
    {
      question: 'Which rock band had a hit with the song "Smells Like Teen Spirit"?',
      options: ['Nirvana', 'Pearl Jam', 'Soundgarden', 'Alice in Chains'],
      correctAnswer: 'Nirvana'
    },
    {
      question: 'Who was the bassist for the band "The Beatles"?',
      options: ['Paul McCartney', 'John Lennon', 'Ringo Starr', 'George Harrison'],
      correctAnswer: 'Paul McCartney'
    },
    {
      question: 'What band released the album "Abbey Road"?',
      options: ['The Beatles', 'The Rolling Stones', 'Led Zeppelin', 'Pink Floyd'],
      correctAnswer: 'The Beatles'
    },
    {
      question: 'Which rock band had a hit with the song "Sweet Child o\' Mine"?',
      options: ['Guns N\' Roses', 'Aerosmith', 'Metallica', 'Def Leppard'],
      correctAnswer: 'Guns N\' Roses'
    },
    {
      question: 'Who was the lead singer of the band "Led Zeppelin"?',
      options: ['Robert Plant', 'Freddie Mercury', 'Mick Jagger', 'David Bowie'],
      correctAnswer: 'Robert Plant'
    }
  ];
  

function Trivia() {
  // currentQuestion and score are variables whos default value is set to 0 with useState(0)
  // currentQuestion tracks the index of teh current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Create an array 'answeredOptions' the length of the questions array created earlier
  // to track answers given for each question, .fill(null) sets all the values to a 
  // default value of null.
  const [answeredOptions, setAnsweredOptions] = useState(Array(questions.length).fill(null));

  // this handler will be called on the onClick() event of li's (answers).
  const handleAnswer = (option, index) => {
    // if this is not null, an answer has been given for this question, so just return
    // out of this handleAnswer
    if (answeredOptions[currentQuestion] !== null) {
      return;
    }

    // create a copy of the array using the spread operator "..." We will make changes in
    // the copied array then copy it back, to help maintain immutability
    const newAnsweredOptions = [...answeredOptions];
    
    // updated value at the index corresponding to the current question. index is
    // the option that was picked. Updating this value indicates an answer has been selected
    newAnsweredOptions[currentQuestion] = index;
    
    // use the setAnsweredOptions function to update the answeredOptions array with our changes
    setAnsweredOptions(newAnsweredOptions);

    // If the answer is correct, add 1 to the score
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  // nextQuestion is a function because of the " = () => { " Arrow function syntax
  const nextQuestion = () => {
    // make sure currentQuestion (the index) is less than the last index in the array
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // see above
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // when we do this "import Trivia from './Components/TriviaApp';" in another file, the
  // following is what will be shown by including  <Trivia /> 
  return (
    <div >
      <h2>Trivia Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswer(option, index)}
            className={answeredOptions[currentQuestion] === index ? (option === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
      <button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
      
      { <p>Your Score: {score}</p> }
      { currentQuestion === questions.length - 1 && <p>Trivia Completed!</p> }
    </div>
  );
}

export default Trivia;
