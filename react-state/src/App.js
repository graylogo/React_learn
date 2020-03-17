import React from 'react';
import Count from './components/Count'
import Box from './components/Box'
import Drawer from './components/Drawer'
import Drawer2 from './components/Drawer2'
import Tab from './components/Tab'
import Banner from './components/Banner'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>

        <Count />
        <hr/>
        <Box/>
        <hr/>
        <Drawer />
        <hr/>
        {/*<Drawer2 />*/}
        <Tab />
        <hr />
        <Banner />
      </div>
  )
}

export default App;
