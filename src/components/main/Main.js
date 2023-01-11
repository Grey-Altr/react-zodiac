import React from 'react';
import { zodiac } from './data.js';
import ZodiacData from '../zodiac/Zodiac.js';
import background from '../../background.jpeg';
import './Main.css';

export default function Main() {
  return (
    <main style={{ background: `url(${background})` }}>
      {zodiac.map((item) => (
        <ZodiacData key={item.name} {...item} />
      ))}
    </main>
  );
}
