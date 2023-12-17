import React from "react"
import list from './players'
import Player from './player'
import './App.css';


const PlayerList=()=>{
    return(
        <div className="cc">
            {list.map((playerr,id)=>(
                <Player playerr={playerr} id={id} />
            )
            )
            }
        </div>
    );
};

export default PlayerList;


