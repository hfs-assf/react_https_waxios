import React from 'react';

const UserList = props =>
    <div className="player-container">
        <h4 className="card">{`${props.strPlayer} (${props.strPosition})`}</h4>
        <div>
            <img src={props.strThumb} alt={props.strPlayer}/>
            <p>{props.strDescriptionEN}</p>
        </div>
    </div>

export default UserList;