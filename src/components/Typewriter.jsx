import { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex] || '';

    let timeout;

    if (!isDeleting && charIndex < currentFullText.length) {
      // Typing mode - add characters
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentFullText.length && currentFullText.length > 0) {
      // Finished typing - pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Deleting mode - remove characters
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting - move to next text
      const nextIndex = (currentTextIndex + 1) % texts.length;
      setCurrentTextIndex(nextIndex);
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentText('');
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;
