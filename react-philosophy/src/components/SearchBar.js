import React from "react";
const SearchBar =(props) =>{

    return (
        <div className="SearchBar">
            <label htmlFor ="a"><input type="text" id="a" placeholder="searching..." value={props.value }
                  // onChange={props.handler}  //如果要传参的话，要写成箭头函数
                onChange={(event)=>{props.handler("inputVal",event)}}
            /></label><br/>
            <input type="checkbox" checked={props.checked}
                   // onChange={props.handler}
                onChange={(event)=>{props.handler('checked',event)}}
            />Only show products in stock

        </div>
        )
};
export default SearchBar
