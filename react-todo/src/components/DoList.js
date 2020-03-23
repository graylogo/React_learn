import React from "react";
import './dolist.css'
const DoList =(props)=>{
    const {name,del,id,statu,clickItem} =props;
    return(
       <li className="doList">
           <span id ={id} className={statu?"":"active"} onClick={clickItem}>{name}</span><span className="del-button" id={id} onClick={del}>del</span>
       </li>
    )
};
export default DoList;
