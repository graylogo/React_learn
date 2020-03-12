import React from "react"; //作用时让该模块支持react语法 jsx语法在js捏写html
import ReactDOM from "react-dom"; //使用react-dom下的render方法将react的app组件 渲染到真实的页面内的#root中
import "./index.css";
import App from "./App"; //导入整合之后的app组件
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root")); //渲染

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
