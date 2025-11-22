import React from 'react';
import { 
  FaMicroscope, 
  FaChartSimple, 
  FaStore, 
  FaComments, 
  FaFish 
} from 'react-icons/fa6'; 
import { useLanguage } from '../context/LanguageContext'; // <-- IMPORT THE LANGUAGE HOOK

// The options array now uses a 'key' for translation instead of the full English name.
// This key must match the keys in your translation files (or the 'translations' object).
const options = [
  { key: 'diagnostic', Icon: FaMicroscope, href: '/UnderConstruction' },
  { key: 'aquacultureData', Icon: FaChartSimple, href: '/UnderConstruction' },
  { key: 'stockSells', Icon: FaStore, href: '/UnderConstruction' },
  { key: 'aquaConsult', Icon: FaComments, href: '/UnderConstruction' },
  { key: 'foodPrep', Icon: FaFish, href: '/UnderConstruction' }, 
];

const QuickOptions = () => {
  // 1. Access the translation function 't' from the context
  const { t } = useLanguage(); 

  return (
    <section className="quick-options-container">
      {options.map((option) => (
        // 2. Use the 'key' (the translation ID) as the React key
        <a 
          key={option.key} 
          href={option.href} 
          className="quick-option-box"
        >
          <option.Icon className="icon" />
          
          {/* 3. Use the translation function t() to display the translated name */}
          <span>{t(option.key)}</span> 
        </a>
      ))}
    </section>
  );
};

export default QuickOptions;