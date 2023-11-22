import React from 'react';
import { useState, useEffect } from 'react';
import Userdata from './Userdata';

const Calccontainer = () => {

    const [steamID, setSteamID] = useState("");
    const [showData, setShowData] = useState(false);

  const handleInputChange = (e) => {
    setSteamID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID Steam saisi :', steamID);
    setShowData(true);
  };


    return (
    <div>
        <div className='calc'>
              <ul>
                <li>
                    <a href="https://help.steampowered.com/fr/faqs/view/2816-BE67-5B69-0FEC" target="_blank">Comment trouver mon ID steam ?</a>
                </li>
                <li>
                    <input type="text" className='submit-area'  onChange={handleInputChange} placeholder='Entrer votre ID steam' />
                </li>
                <li>
                    <p>Si vous n'avez pas d'ID steam sous la main, essayez le mien : 76561198196589010 </p>
                </li>
                <li>
                    <input type="submit"  className='submit-btn'  onClick={handleSubmit} value="Voir les statistiques !" />
                </li>
            </ul>
        </div>
        {showData && <Userdata steamID={steamID} />}
    </div>

    );
};

export default Calccontainer;