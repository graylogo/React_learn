import React from "react";
import "./list.css"
const List =(props)=>{
    const{title,content,likeCount,commentCount}=props;
    return(
        <div className = "list">
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
            <span className="like">{likeCount}</span>
            <span className="comment">{commentCount}</span>
        </div>
    )
};
export default List;
