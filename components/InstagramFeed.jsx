import React, { useEffect } from 'react';

const InstagramFeed = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="elfsight-app-fe0d2e94-d29c-4dfd-ab8d-af4410f54a34" 
      dangerouslySetInnerHTML={{ __html: '<div data-elfsight-app-lazy></div>' }}
    ></div>
  );
};

export default InstagramFeed;
