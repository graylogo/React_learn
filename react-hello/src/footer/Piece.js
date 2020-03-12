import React from 'react';
import './piece.css';
const Piece = (props) => {
    return ( 
        <div className = "piece">
            <h3>{props.title}</h3>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
        </div>
     )
}
 
export default Piece;