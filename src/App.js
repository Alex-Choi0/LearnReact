import { useState } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import "./css/style.css";
import "./index.css";

// 01:02:00

function App() {
    const [tasks, setTask] = useState([
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      },
    ])

    // Delete Task
    const deleteTask = (id) => {
      console.log('delete', id);
      setTask(tasks.filter(ele => ele.id !== id));
    }

    // Reminder
    const reminder = (id) => {
      setTask(tasks.map(ele => ele.id === id ?
        {...ele, reminder: !ele.reminder}: ele))
    }
  return (
    <div className="container">
      <Header/>
      {tasks.length === 0 ? "No Task To Show" : <Tasks tasks={tasks} deleteTask={deleteTask}
      reminder={reminder}/>}
    </div>
  );
}



export default App;
