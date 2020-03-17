// App.js就是一个组件，通常被当作根组件，所有其他组件都直接或者间接地放到app组件内
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Head from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

// 组件的创建
//1. 函数式创建，函数名必须大写，文件名也必须大写，一个js文件代表一个组件
//直接写个函数需要返回一个html结构，最后使用默认导出方式导出该组件
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Head />
      <Main />
        <Footer />
    </div>
  );
}

export default App;
