import React from "react"
import "./tab.css"
class Tab extends React.Component{
    state ={
        tits:["家用电器","手机通讯","电脑数码","食品百货","生活服务","京东国际"],
        cons:[
            {
            pic: 'http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258116.png',
            title:"千台家电免费试用 抢百万现金红包",
            arr:["冰洗品质有我","延迟送货补贴100","品质空调大牌直降","潮流小电品质生活"]
        },
            {
                pic: "http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258567.png",
                title: "手机尚学季 开学享特权 手机/手配5折限时抢",
                arr:["华为MateXs折叠屏","OPPO Find X2新品","黑鲨游戏手机3","IQOO3新品发布"]
            },
            {
                pic: "http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258567.png",
                title: "3手机尚学季 开学享特权 手机/手配5折限时抢",
                arr:["华为MateXs折叠屏","OPPO Find X2新品","黑鲨游戏手机3","IQOO3新品发布"]
            },
            {
                pic: "http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258567.png",
                title: "4手机尚学季 开学享特权 手机/手配5折限时抢",
                arr:["华为MateXs折叠屏","OPPO Find X2新品","黑鲨游戏手机3","IQOO3新品发布"]
            },
            {
                pic: "http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258567.png",
                title: "5手机尚学季 开学享特权 手机/手配5折限时抢",
                arr:["华为MateXs折叠屏","OPPO Find X2新品","黑鲨游戏手机3","IQOO3新品发布"]
            },
            {
                pic: "http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2F1584258567.png",
                title: "6手机尚学季 开学享特权 手机/手配5折限时抢",
                arr:["华为MateXs折叠屏","OPPO Find X2新品","黑鲨游戏手机3","IQOO3新品发布"]
            },
        ],
        curr:0
    };

    render() {
        console.log(this.state.curr);
        return (
            <div className = "Tab">
                <ul>
                    {this.state.tits.map((item,index) =><li className={this.state.curr ===index?'active':""}
                                                            key={index} onClick={this.click.bind(this,index)}>{item}</li>)}
            </ul>
                <div className="content">
                    {this.state.cons.map((item,index)=>{
                        return <div key={index} style={{display: this.state.curr ===index?"block":"none"}}>
                        <img src ={item.pic} alt={''}/>
                            <h4>{item.title}</h4>
                            <ul className={"con"}>
                                {item.arr.map((i,ind)=><li key={ind}>{i}</li>)}
                            </ul>
                        </div>
                    })}
                </div>

            </div>
        );


    }
    click=(n)=>{this.setState({curr:n})};
}
export default Tab;