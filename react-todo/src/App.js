//待办事项页面
import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import PostList from "./PostList/PoatList";
function App() {
  return (
    <div className="App">
      <Todo />
      <PostList />
    </div>
  );
}

export default App;
