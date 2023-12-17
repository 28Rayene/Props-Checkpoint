import React from "react";
import './app3.css';

function player({playerr,id}){
    return(
        <div className="player-card">
        <div className="card-header">
          <img src={playerr.image} alt={playerr.name} className="player-image" />
          <h2>{playerr.name}</h2>
          <p>Age: {playerr.age}</p>
          <p>Nationality: {playerr.nationality}</p>
          <p>Team: {playerr.team}</p>
          <p>Jersey Number: {playerr.jerseyNumber}</p>
        </div>
 
      </div>
    )
}
player.defaultProps={
  
  name:'nizar smichi',
  age:'23',
  nationality:'Tunisia',
  team:'AS Marsa',
  jerseyNumber:'7',
  image:'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/332029398_181682444580594_2587755537387835376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=pYdYR1qRQDAAX_MHIS_&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBVCneVjheCMWa8VKklCgQ__0iYUaIeb24LkRwaLAt_dw&oe=65821483'
}
export default player