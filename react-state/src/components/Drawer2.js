import React from "react";
import './Drawer2.css'
// import { fadeIn } from 'react-animations'
class Drawer extends React.Component{
    state ={
        drawer:false
    };

    render() {
        const {drawer} = this.state;
        return (
            <div className = "Drawer">
                <button onClick={() =>{this.setState({drawer:true})}}>抽屉</button>
                <div onClick={() =>{this.setState({drawer:false})}} className={drawer ? "drawer_wrap show":"drawer_wrap hide"}>
                    <div className={drawer ? "dome_drawer show ":"dome_drawer hide"}>我在这</div>
                </div>

            </div>
        );
    }    
}
export default Drawer;