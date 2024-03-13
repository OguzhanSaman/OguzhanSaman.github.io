import React, { useEffect } from 'react';

const CookieManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//ccdn.mobildev.in/e26537b7dd3241fb89be2f342c2ec98a.js';
    script.charset = 'UTF-8';
    script.setAttribute('data-token', 'Ew3IX5j2om94X8HFOn0J');
    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null; // Since this component only adds a script, it doesn't render anything
};

export default CookieManager;



