import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
    <img alt="sadfuck" src={'https://robohash.org/${props.sadfuck.id}?set=set2&size=180x180'}/>
    <h2 > {props.sadfuck.name} </h2>
    <p>{props.sadfuck.email}</p>
    </div>
);