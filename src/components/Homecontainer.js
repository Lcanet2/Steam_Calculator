import React from 'react';

const Homecontainer = () => {
    return (
        <div className='text-container'>
            <h1>Bienvenue sur Counter Strike : Stats !</h1>
            <h2>Qu'est ce que CS : Stats ?</h2>
            <p>CS : Stats est un site vous permettant de voir et analyser vos statistiques liées au jeu Counter Strike, chose qui n'est pas possible sur Counter Strike directement, à moins de payer...</p>
            <h2>Prérequis pour faire fonctionner CS : Stats ?</h2>
            <p>Ce site est un projet réalisé par moi même, il faut impérativement installer l'extension chrome <a href="https://chromewebstore.google.com/search/Allow%20CORS%3A%20Access-Control-Allow-Origin?hl=fr&utm_source=ext_sidebar">Allow CORS: Access-Control-Allow-Origin
            </a>, puis l'activer en cliquant sur le logo dans vos extension, sinon l'api ne pourra pas être interrogée à cause des restrictions de sécurités de steam. Mais rassurez-vous, il est prévu de faire un back-end à ce projet pour résoudre ce problème.</p>
            <h2>Comment utiliser CS:Stats ?</h2>
            <p>Rien de plus simple ! Il vous suffit de cliquer sur l'onglet 'Calculateur' et d'y entrer votre ID steam, un lien sera disponible sur cette page pour vous expliquer comment le trouver.</p>

        </div>
    );
};

export default Homecontainer;