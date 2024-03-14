import React, { useState } from 'react';
import Counter from './Counter';

const newCounter = Counter;
const StatementCarousel = () => {
const statements = [
  ['Statement 1: React is a JavaScript library for building user interfaces.','A plot'],
  'Statement 2: JavaScript is a programming language commonly used in web development.',
  'Statement 3: OpenAI developed GPT-3, a powerful language model for natural language processing.',
  ];
  
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);

  const handleNextStatement = () => {
    setCurrentStatementIndex((prevIndex) => (prevIndex + 1) % statements.length);
  };

  const handlePreviousStatement = () => {
    setCurrentStatementIndex((prevIndex) => (prevIndex - 1 + statements.length) % statements.length);
  };

  //statement[] is the array of questions
  return (
    <div>
      
      <h2>Statement Carousel</h2>
      <p>{statements[currentStatementIndex]}</p>
      
      <Counter />
      <button onClick={handlePreviousStatement }>Previous</button>
      <button onClick={handleNextStatement}>Next</button>
    </div>
  );
  
};

export default StatementCarousel;
