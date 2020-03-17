import React, { Component } from 'react'
class Form extends Component {
    state = {
        inputVal: '0000',
        textareaVal: '默认的内容',
        checkboxVal: false
    };
    render () {
        const { inputVal, textareaVal,checkboxVal} = this.state
        // console.log(checkboxVal)
        return (
            <div>
                <h2>react表单 </h2>
                <h3>input</h3>
                {/* onChange 事件意思:  当 input 输入内容时就会触发 */}
                {/* <input type="text" value={val} onChange={(event) => {
          this.handler(event)
        }} /> */}
                <input type="text" value={inputVal} onChange={(event) => {
                    this.handler('inputVal', event)
                }} />
                <hr />
                <h3>textarea</h3>
                <textarea cols="30" rows="10" value={textareaVal} onChange={(event) => {
                    this.handler('textareaVal', event)
                }}> </textarea>
                <h3>checkbox</h3>
                <input type="checkbox"  checked={checkboxVal} onChange={(event) =>{
                    this.handler("checkboxVal",event)
                }}/>
            </div>
        )
    }
    // 当一个函数被当做事件函数的时候默认会被传递一个参数叫 event  事件对象
    handler = (stateName, event) => {
        this.setState({
            // event.target.value  是原生获取输入框内容的方法
            [stateName]: event.target.value
        })
    }

}
export default Form