import React, { useEffect, useState } from 'react';
import playerData from '../fakeData/data.json';
import Information from '../Information/Information';
import './Player.css';
import Team from '../Team/Team';



const Player = () => {
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState([])

    

    useEffect( () => {
        setPlayers(playerData);
    } , []);

    const handleAddPlayer = (player) =>{
        console.log('player added', player);
        const newTeam = [...team, player]
        setTeam(newTeam);



    }

    return (
        <div className="player-container">
            <div className="information-container">
                <h1>Team Stuff: {players.length} </h1>
                
                {
                    players.map( player => <Information 
                                            handleAddPlayer={handleAddPlayer}
                                            player={player}>
                                        
                                            </Information>)
                }
                
            </div>

            <div className="team-container">
                <Team team={team}></Team>
                
                
            </div>
      
        </div>
    );
};

export default Player;