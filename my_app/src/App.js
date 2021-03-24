// import { render } from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import Todos from './compoments/Todos';

// function App() {

class App extends Component{

  state = {
    todos: [
        {
            id: 1,
            title: 'Take out the trash',
            completed: false
        },
        {
            id: 2,
            title: 'Dinner with wife',
            completed: false
        },
        {
            id: 1,
            title: 'Meeting with boss',
            completed: false
        }
    ]
}

render(){
    return (
      <div className="App">
      <Todos />
      </div>
    );
  }
}

export default App;
