import React, { useState, useEffect } from 'react'
import './background.css'

function Background({ sensitivity = 0.07 }) {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const initialColors = ["#219b44ac", "#9b2146ad", "#21609bac"];
  const [colors, setColors] = useState<string[]>(initialColors);

  const shuffleColors = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Use useEffect to shuffle the colors array on component mount
  useEffect(() => {
    setColors(shuffleColors([...initialColors])); // Shuffling a copy of the initial array
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (event.clientX - centerX) * sensitivity;
      const deltaY = (event.clientY - centerY) * sensitivity;

      setPosition({ x: deltaX, y: deltaY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sensitivity]);

  return (
    <div className='background'>
      <div className="circles">
        <div className="circle1" style={{ transform: `translate(${position.x}px, ${position.y}px)`, background: colors[0] }}></div>
        <div className="circle2" style={{ transform: `translate(${position.y}px, ${position.x}px)`, background: colors[1] }}></div>
        <div className="circle3" style={{ transform: `translate(${position.y}px, ${position.y}px)`, background: colors[2] }}></div>
      </div>

      <div className="topBackground"></div>
    </div>
  )
}

export default Background