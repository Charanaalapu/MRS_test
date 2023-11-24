import React, { useEffect } from 'react';

function LanguageTranslator() {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    }

    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    }
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
}

export default LanguageTranslator;
