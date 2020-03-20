import React from "react";
const ProductRow =(props) =>{
    return(
        <div className="productRow">
            <span style={{color:props.stocked?"green":"red"}}>{props.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{props.price}</span>
        </div>
    )
};
export default ProductRow;
