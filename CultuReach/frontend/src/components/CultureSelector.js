import React from 'react';
import './CultureSelector.css';
import CultureButton from './CultureButton';

// Placeholder imports - replace these with actual image paths
import portugueseFlag from './img/portugalFlag.png';
import brazilianFlag from './img/brazilFlag.png';
import indianFlag from './img/indiaFlag.png';
import chineseFlag from './img/chinaFlag.png';

function CultureSelector() {
  return (
    <div className="culture-selector">
      <CultureButton cultureName="Portuguese" flagImage={portugueseFlag} />
      <CultureButton cultureName="Brazilian" flagImage={brazilianFlag} />
      <CultureButton cultureName="Indian" flagImage={indianFlag} />
      <CultureButton cultureName="Chinese" flagImage={chineseFlag} />
    </div>
  );
}

export default CultureSelector;