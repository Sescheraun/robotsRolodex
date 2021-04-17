import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className ='card-container'>
    
        <img 
            // width="100" 
            // height="100" 
            alt="monster" 
            src={`https://robohash.org/${props.monster.id}`} />
            <h2>{ props.monster.name}</h2>
            <h3> { props.monster.id } </h3> 

    </div>
)