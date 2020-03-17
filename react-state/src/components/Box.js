import React from "react"
import './box.css'
class Box extends React.Component{
    state ={
        bgc: '#ccc',
        color:false
    };

    render() {
        return (
            <div className = "Box">
                <button onClick={this.changeColor}>点击变色</button>
                <div className="box" style={{backgroundColor:this.state.bgc}} > </div>
            </div>
        );
    }
    changeColor = ()=>{
        this.state.color ?
            this.setState(
            {bgc:'red'}
        ):this.setState(
            {bgc:'#ccc'}
            );
        this.setState(
            {color : !this.state.color}
        )
        // this.state.color = !this.state.color

    }
}
export default Box;