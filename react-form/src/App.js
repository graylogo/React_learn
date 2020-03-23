import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Checkbox from './components/Checkbox'
import Alert from "./components/Alert";
class App extends React.Component{
    state ={show:false,inputVal:'',showVal:''};
render() {
    const {show,inputVal,showVal} =this.state;
    console.log(this.button)
   return(
       <div className="App">

              {!showVal?<div style={{display:'block'}} ref={button=>this.button=button} className="box">
                  {/*//用ref获取原生DOM节点*/}
                  <button    onClick={
                      ()=>{this.setState({show:true})}
                  }>提示框</button>

                  <Alert text = '好的' show ={show} close={this.close}>
                      <h3>请输入内容</h3>
                      <input type="text" value={inputVal} onChange={this.handler}/>
                  </Alert>
              </div>:<span>{inputVal}</span>}
           <button onClick={this.disp}>aa</button>
           <Form />

           <hr/>
           <Checkbox/>

       </div>
   )
}
close =() =>{
    this.setState({show:false,showVal:this.state.inputVal});
    console.log(this.button)

};
handler =(event)=>{
    this.setState(
        {inputVal:event.target.value}
    )
};
disp =()=>{
    setTimeout(()=>{
        this.button.style.display="none"
        console.log(this.button)
        // this.button.style.width= '100px'
        // document.querySelector('.box').style.display = 'none'
    },500)
}
}
export default App;

