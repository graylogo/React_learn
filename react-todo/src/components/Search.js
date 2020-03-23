import React from "react";
import './search.css'
const Search =(props)=>{
    const {handler,clickOk,value} = props;
    return(
        <div className="search">
            <span className="all-select"> </span>
            <label className="search" htmlFor="x">
                <input id="x" placeholder="What needs to be done?"
                value={value} onChange={handler}/>
            </label>
            <span className="ok-click" onClick={clickOk}>OK</span>
        </div>

    )
};
export default Search;
