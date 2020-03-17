import React from "react";
class Count extends React.Component{
    state = { number:100};
    render() {
        const {number} = this.state;
        return (
            <div>
                <button onClick={this.sub}>-</button>
                <span>{number}</span>
                <button onClick = {this.add}>+</button>
            </div>
        );
    }
    add = () =>{
        console.log(1);
        this.setState(
           { number: this.state.number + 1}
    )
    };
    sub = () =>{
        this.setState(
            {number: this.state.number - 1}
        )
    }
}

export default Count;
