import React from "react";
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from "./ProductRow";
const ProductTable =(props) =>{
    const goods = props.goods;
    // const  filterGoods = ()=>goods.filter(item =>item.category ==="Sporting Goods");
    // const x = filterGoods();
    // const goodsList =() => x.map((item)=> <ProductRow title ={"Sporting Goods"} name={item.name} price = {item.price}/>)
    // console.log(x);
    //把上面两个函数合并为一个
    const filterGood = (nameVal)=>goods.filter(item =>item.category ===nameVal).map((item)=> <ProductRow key = {item.name} title ={nameVal} name={item.name} price = {item.price} stocked={item.stocked}/>);
    const sportingList = filterGood("Sporting Goods");
    const EleList = filterGood("Electronics");

            if(sportingList.length || EleList.length){
              return(
                <div className="productTable">
                    {props.title || 'Default Title'}
                    {sportingList.length?<ProductCategoryRow title ={"Sporting Goods"}/>:""}
                    {sportingList}
                    {EleList.length?<ProductCategoryRow title ={"Electronice"}/>:''}
                    {EleList}
                </div>  )
            }else{
               return( <div className="productTable">没有查找到相关商品</div>)
            }

};
export default ProductTable;
