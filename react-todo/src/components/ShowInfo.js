import React from "react";
import './showinfo.css'
const ShowList =(props)=>{
    const {listLeft,click,delAll,curr,istrue} = props;
    return(

        <div className = "showList">
            <span className="list_left">{listLeft} items left</span>
            <ul >
                <li className={curr===0?"on":''} onClick={(event)=>{click(event,0)}}>All</li>
                <li className={curr===1?"on":''} onClick={(event)=>{click(event,1)}}>Active</li>
                <li className={curr===2?"on":''}  onClick={(event)=>{click(event,2)}}>Completed</li>
            </ul>
            <span className="clear" onClick={delAll} style={{display:istrue?'none':"block"}}>Clear completed</span>
        </div>
    )

};
export default ShowList;
