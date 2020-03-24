import React from "react"
import './todo.css'
import Search from "./Search";
import DoList from "./DoList";
import ShowInfo from "./ShowInfo";
class Todo extends React.Component{
    state ={
        searchVal:'',
        list:[
            {id:"1",name:'第一件事',statu:false},
            {id:"2",name:'吃饭',statu:false},
            {id:"3",name:'写作业',statu:true},
            {id:"4",name:'上网课', statu:true},
            {id:"5",name:'旅游',statu:false},
            {id:"6",name:'去学校',statu:false},
        ],
        curr:0,
    };

    render() {
        const {searchVal,list,curr} = this.state;
        const activeList = list.filter((item)=>item.statu===true);
        const comList = list.filter((item)=>item.statu===false);
        const filter =(lists)=>lists.map((item,ind)=><DoList id = {item.id} statu={item.statu} name ={item.name} key ={item.id} del ={this.del} clickItem = {this.clickItem}/>);
        const dolist = ()=>{
            if(curr ===0){return(filter(list))}
            else if(curr===1){return (filter(activeList))}
            else {return(filter(comList))}
        };
        const istrue =list.filter((item)=>item.statu===false).length;
        return (
            <div className = "todo">
                <h1>todos</h1>
            <Search value = {searchVal} handler = {this.handler} clickOk = {this.clickOk}/>
                <ul>{dolist()}</ul>  {/*    这里需要拿到数据后调用list模块，有多少我就map多少*/}
            <ShowInfo listLeft = {list.filter((item)=>item.statu===true).length} click ={this.click} delAll ={this.delAll} curr = {curr} istrue={istrue===0} />
            </div>
        );
    }
    click=(event,n)=>{
        // console.log(event.target.sibling);
        // console.log(event.currentTarget.getAttribute("id"))
        this.setState({curr:n});
        // event.target.className =(event.target.id === n?"":"on");
        // event.target.sibling= '';

    };
    del = (event)=>{
        // const ind = this.state.list.findIndex(event.target.id);
            const ind =this.state.list.findIndex(item=>item.id === event.target.id);
            this.state.list.splice(ind,1);
            this.setState(
                {list:this.state.list,

                }
            );
        // console.log(this.state.list.findIndex(this.state.list.map((item,ind) =>item.id === event.target.id))===true)
        // console.log(this.state.list.map((i)=>findIndex(()=>this.state.list.map((item,ind) =>item.id === event.target.id)))
    };
    delAll =()=>{
        const a =this.state.list.filter(item=>item.statu===true);
        this.setState({
            list:a
        })
    };
    handler = (event) =>{
        this.setState({
            searchVal:event.target.value,
            // tempVal:''
        })
    };
    clickItem =(event)=>{
        const ind = this.state.list.findIndex(item=>item.id === event.target.id);
        const list = this.state.list;
        list[ind].statu = !list[ind].statu;
        this.setState({
         list:list
        })
        // this.state.list[ind].setState({
        //     statu:!statu,
        // })
    };
    clickOk =()=>{
        if(this.state.searchVal){
            // const id = this.state.list.length +1;
            const id = new Date().getTime();
            this.state.list.push({id: id.toString(),name: this.state.searchVal,statu:true});
            this.setState({
                list: this.state.list,
                searchVal:''
            })
        }else {

        }
    }
}
export default Todo;
