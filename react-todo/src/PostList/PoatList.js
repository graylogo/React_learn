import React from "react"
import axios from "axios"
import "./postlist.css"
import List from './List'
class PostList extends React.Component{
    state ={
        data:[]
    };

    render() {
        const {data}= this.state;
        console.log(data);
        const lists = data.map((item)=><
            List key={item.id}
                 title={item.title}
                 content ={item.content}
                 likeCount={item.likeCount}
                 commentCount={item.commentCount}
        />);
        return (
            <div className = "postList">
                <h2>文章列表</h2>
                {lists}
            </div>
        );
    }
    componentDidMount() {
    axios.get(" http://localhost:3001/post").then((item)=>{
        this.setState({
            data:item.data
        })
    })
    }
}
export default PostList;
