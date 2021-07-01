import React from 'react';
import './Team.css';

const Team = (props) => {
    const team = props.team;
    let total = 0;
    for(let i = 0; i < team.length; i++){
        const player = team[i];
        total = total + player.annualSalary;
    }
    return (
        <div className="team">
            <h3>Team Summary</h3>
            <h3>Active Roster: 
                <ul>
                    {
                    team.map(player => <li>{player.name}</li>)  
                    }
                </ul>
            </h3>
            <h5>Total Team Player: {team.length}</h5>
            <h5>Total Budget: {'$' + total}</h5>
        </div>
    );
};

export default Team;