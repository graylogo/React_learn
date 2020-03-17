import React from "react"
import './Drawer.css'
class Drawer extends React.Component{
    state ={
        drawer:false
    };

    render() {
        const {drawer} = this.state;
        return (
            <div className="Drawer">
                <button onClick={() => {
                    this.setState({drawer: true})
                }}>抽屉
                </button>
                <div onClick={() => {
                    this.setState({drawer: false})
                }} className={drawer ? "drawer_wrap show" : "drawer_wrap hide"}>
                    <div className={drawer ? "dome_drawer show " : "dome_drawer hide" } onClick={this.stopClick}>我在这</div>
                </div>

            </div>
        );
    }
        stopClick = (event) =>{
            event.stopPropagation()

    }    
}
export default Drawer;