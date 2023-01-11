import React from 'react';
import { zodiac } from '../../data.js';
import zodiacData from '../zodiac/Zodiac.js';
import background from '../../public/background.jpeg';
import './Main.css';

export default function Main() {
  return (
    <main style={{ background: `url(${background})` }}>
      {zodiac.map((item) => (
        <zodiacData key={item.name} {...item} />
      ))}
    </main>
  );
}
