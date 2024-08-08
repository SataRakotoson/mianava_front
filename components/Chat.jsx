// ElfsightAppIntegration.js
import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    // Création du script et ajout au document
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    script.setAttribute('data-use-service-core', ''); // Ajout de l'attribut data-use-service-core
    document.body.appendChild(script);

    // Nettoyage au démontage du composant pour éviter les fuites de mémoire
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // Intégration du contenu HTML statique
    <div className="elfsight-app-ede3df35-6783-4e42-ab93-4342ba6e8815" data-elfsight-app-lazy></div>
  );
};

export default Chat;
