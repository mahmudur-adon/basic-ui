import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

//cardlist hocche functional component
export const CardList = props => (
  
    <div className = 'card-list'>
    {
       props.sadfucks.map(sadfuck => 
        (<Card key={sadfuck.id} sadfuck={sadfuck}/> ))
    }
    </div>
);
