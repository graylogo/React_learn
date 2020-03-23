import React from "react"
import './alert.css'
class Alert extends React.Component{
    state ={

    };

    render() {
        const {show,close,text,children} =this.props;
        return (
            <div onClick={close} className = "Alert" style ={{display:show?"block":"none"}}>
                <div onClick={this.stopClick} className="box">
                    {children}
                    <button className="ok" onClick={close}>{text}</button>
                </div>
            </div>
        );
    }
    stopClick = (event)=>{
        event.stopPropagation()
    }
}
export default Alert;
