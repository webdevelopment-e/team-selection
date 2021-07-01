import React from 'react';
import './information.css';

const Information = (props) => {

    const {name, img, nationality, position, annualSalary} = props.player;
    return (
        <div className="information">
            <div className="player-image">
                <img src={img} alt="" />
            </div>
            <div className="player-detail">
                <h3>Player Name: {name}</h3>
                <p>Nationality: {nationality}</p>
                <p>Position: {position}</p>
                <p>Annual-Salary: {'$' + annualSalary}</p>
                <button onClick={ () => props.handleAddPlayer(props.player)} className="main-button">Add to Team</button>
            </div>
        </div>
    );
};

export default Information;