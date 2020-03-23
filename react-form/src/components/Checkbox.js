import React from "react"
class Checkbox extends React.Component{
    state ={
        checkboxVal:[]
    };

    render() {
        return (
            <div className = "Checkbox">
                <form action="">
                    <input  type="checkbox" value='a' onChange={this.handler}  checked={this.state.checkboxVal.indexOf('a')!==-1  }/>1
                    <input  type="checkbox" value='b' checked={this.state.checkboxVal.indexOf('b')!==-1  } onChange={this.handler}/>2
                    <input  type="checkbox" value='c' checked={this.state.checkboxVal.indexOf('c')!==-1  } onChange={this.handler}/>3
                    <input  type="checkbox" value='d' checked={this.state.checkboxVal.indexOf('d')!==-1  } onChange={this.handler}/>4
                    <input  type="checkbox" value='e' checked={this.state.checkboxVal.indexOf('e')!==-1  } onChange={this.handler}/>5
                    <button onClick={this.submit}>提交</button>
                </form>
            </div>
        );
    }
    handler = (event)=>{

        // const {checkboxVal} = this.state;
        const Val = [...this.state.checkboxVal];
        const value = event.target.value;
        const ind = Val.indexOf(value);
       if( ind===-1){
           Val.push(value)
       }else {
           Val.splice(ind,1)
       }
       this.setState(
           {checkboxVal:Val}
       )
    }
   submit = (event) =>{
        event.preventDefault()
   }
}
export default Checkbox;
