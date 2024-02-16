import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import React, { useState } from 'react'
import './App.css';

function App() {
     const [task, setTask] = useState('')

     const getTask = (data) => {
        setTask(data)
     }

  return (
    <>
      <Header transferData={getTask}/>
      <Content addedTask={task}/>
      <Footer/>
    </>
  );
}

export default App;
