import React from "react"
import "./banner.css"
class Banner extends React.Component{
    state ={
        pic:['pic/slide-1.jpg','pic/slide-2.jpg','pic/slide-3.jpg','pic/slide-4.jpg','pic/slide-5.jpg'],
        surr:0
    };
    click = (n)=>{this.setState({surr:n})};

    render() {
        // this.autoPlay();
        console.log(this.state.surr);
        return (
            <div className = "banner">
                {this.state.pic.map(
                    (item,index)=><li key={index}
                    className={this.state.surr === index?"bannerLi_active":""}><img src={require("./"+item)} alt ={''}/></li> )}
                <ul className={"myLi"}>{this.state.pic.map((item,index)=><li key={index} onClick={this.click.bind(this,index)} className={this.state.surr === index?"li_active":""}></li> )}</ul>
                <div className="arrow_left" onClick={this.clickLeft}><img src={"http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2Farrow_left.png"} alt={""}/> </div>
                <div className="arrow_right" onClick={this.clickRight}><img src={"http://gray.oss-cn-beijing.aliyuncs.com/2020-03-15%2Farrow_right.png"} alt={""}/></div>
            </div>

        );

    }
    componentDidMount() {
        this.autoPlay();
    }

    clickLeft = ()=>{
        let len = this.state.pic.length;
        if(this.state.surr<=0){
            this.setState({surr:len-1})
        }else{
            this.setState({surr:this.state.surr-1})
        }
    };
    clickRight = ()=>{
        let len = this.state.pic.length;
        if(this.state.surr>=len-1){
            this.setState({surr:0})
        }else{
            this.setState({surr:this.state.surr+1})
        }
    };
    autoPlay = ()=>{
        setInterval(this.clickRight,3000);
    }
}
export default Banner;