import React from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
class FilterableProductTable extends React.Component{
    state ={
        inputVal:'',
        checked:false,
        goods:[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]
    };

    render() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET",'http://localhost:3002/goods');
        xhr.send();
        xhr.onreadystatechange =()=>{if(xhr.readyState ===4 && xhr.status ===200){
            console.log(JSON.parse(xhr.responseText));
            //为什么return不生效，不能返回数组？？？
        }};
        const {inputVal,checked,goods} = this.state;
        const newFilter =()=>goods.filter((item)=> item.name.indexOf(inputVal) !== -1 && (checked?item.stocked:true));
                                                   //很关键的判断，如果没有勾选，就代表全都满足条件，返回值为true 如果后面不加括号的话只会判断后面的内容，
        const newGoods = newFilter();
        return (
            <div className = "filterAbleProductTable">
                {goods.length?<div className="box">
                    <SearchBar value = {inputVal} checked = {checked} handler ={this.handler}/>
                    <ProductTable title = {'Name Price'} goods ={newGoods}/>
                </div>:<span>waiting...</span>}
            {/*    数据没来的时候显示waiting*/}
            </div>
        );
    }
    handler = (type,event) =>{
        this.setState(
            {
                [type]:(type === "inputVal")?event.target.value:event.target.checked
            }
        )
    }


}
export default FilterableProductTable;
