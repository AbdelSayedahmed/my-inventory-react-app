import React from 'react';
import "./component-styles/Main.css";
import { data } from './data.js';

function Main() {
    return (
        <div id="main">
            {data.map(item => (
                <div key={item.id} className="item">
                    <img className="item__image" src={item.imageUrl} alt={item.itemName} />
                    <div className='item__card'>
                        <h2 className="item__name">{item.itemName}</h2>
                        <p className="item__description">Description: {item.itemDescription}</p>
                        <p className="item__condition">Condition: {item.condition}</p>
                        <p className="item__price">Price: ${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main;
