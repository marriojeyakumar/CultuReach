import React from 'react';
import './CultureSelector.css';

// Placeholder imports - replace these with actual image paths
import portugueseFlag from './img/portugalFlag.png';
import brazilianFlag from './img/brazilFlag.png';
import indianFlag from './img/indiaFlag.png';
import chineseFlag from './img/chinaFlag.png';
import japaneseFlag from './img/japanFlag.png';

function CultureSelector() {
  const cultures = [
    { name: 'Portuguese', flag: portugueseFlag },
    { name: 'Brazilian', flag: brazilianFlag },
    { name: 'Indian', flag: indianFlag },
    { name: 'Chinese', flag: chineseFlag },
    { name: 'Japanese', flag: japaneseFlag },
    // Add more cultures as needed
  ];

  return (
    <div className="culture-selector-container">
      <header className="culture-header">
        <h2>Popular Cultures near Hudson, MA</h2>
      </header>
      <div className="culture-selector">
        {cultures.map((culture, index) => (
          <div className="culture-button" key={index}>
            <img src={culture.flag} alt={`${culture.name} flag`} className="culture-flag" />
            <span>{culture.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CultureSelector;
