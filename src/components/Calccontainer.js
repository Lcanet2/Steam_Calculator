import React from 'react';

const Calccontainer = () => {
    return (
        <div className='calc'>
              <ul>
                <li>
                    <input type="text" className='submit-area' placeholder='Entrer votre ID ou votre lien steam' />
                </li>
                <li>
                    <input type="submit"  className='submit-btn' value="Remettez votre vie en question ->" />
                </li>
            </ul>
        </div>
    );
};

export default Calccontainer;