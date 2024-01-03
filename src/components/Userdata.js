import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = ({ steamID }) => {
  const [userData, setUserData] = useState(null);

  const numberSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const formatStatValue = (value) => {
    return value ? numberSeparator(value) : 'N/A';
  };
  
  const secondsToHours = (seconds) => {
    const hours = Math.floor(seconds / 3600);

    return `${hours}h`;
  };

  const totalTimePlayedInSeconds = userData?.playerstats?.stats.find(stat => stat.name === 'total_time_played')?.value;
  const totalTimePlayedInHours = totalTimePlayedInSeconds ? secondsToHours(totalTimePlayedInSeconds) : '';
  


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BACK_URL+`/getSteamData?steamid=${steamID}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    if (steamID) {
      fetchData();
    }
  }, [steamID]);

  return (
    <div>
      <h1>Données de l'utilisateur :</h1>
      {userData ? (
        <div className='Stat-Container'>
          <h3>Total Kills : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_kills')?.value)}</h3>
          <h3>Total Morts : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_deaths')?.value)}</h3>
          <h3>Nombre d'heures en jeu : {totalTimePlayedInHours}</h3>
          <h3>Total Wins: {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_wins')?.value)}</h3>
          <h3>Nombre de bombes désamorcées : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_defused_bombs')?.value)}</h3>
          <h3>Nombre de bombes posées : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_planted_bombs')?.value)}</h3>
          <h3>Total Damage : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_damage_done')?.value)}</h3>
          <h3>Kills au couteau : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_kills_knife')?.value)}</h3>
          <h3>Nombre de balles tirées : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_shots_fired')?.value)}</h3>
          <h3>Nombre de balles touchées : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_shots_hit')?.value)}</h3>
          <h3>Nombre de kills contre un sniper qui vous vise : {formatStatValue(userData.playerstats.stats.find(stat => stat.name === 'total_kills_against_zoomed_sniper')?.value)}</h3>
        </div>
      ) : (
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	        <div class="wheel"></div>
	        <div class="hamster">
		        <div class="hamster__body">
			        <div class="hamster__head">
				        <div class="hamster__ear"></div>
				        <div class="hamster__eye"></div>
				        <div class="hamster__nose"></div>
			    </div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
      )}
    </div>
  );
};

export default UserData;
