import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./css/style.css";
import "./index.css";

// 01:02:00
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  const getTasks = async () => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();

      return data;
    };
    const tasksFromServer = await fetchTasks();
    setTask(tasksFromServer);
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Delete Task
  const deleteTask = async (id) => {
    console.log("delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTask(tasks.filter((ele) => ele.id !== id));
  };

  // Reminder
  const reminder = async (id) => {
    const fetchTasks = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();

      return data;
    };
    const taskToToggle = await fetchTasks(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    console.log("reminder working", updTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    console.log("data : ", data);
    setTask(
      tasks.map((ele) =>
        ele.id === id ? { ...ele, reminder: data.reminder } : ele
      )
    );
  };

  // Add Task Form
  const taskForm = () => {
    setShowAddTask(!showAddTask);
    console.log("Add Task Form : ", showAddTask);
  };

  // Fetch Task
  const fetchTasks = async (id) => {
    const fetchTasks = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();

      return data;
    };
    const tasksFromServer = await fetchTasks();
    setTask(tasksFromServer);
  };

  // Add Task
  const addTask = async ({ text, date, reminder }) => {
    let id = 0;
    if (tasks.length !== 0) id = tasks[tasks.length - 1].id + 1;
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        text,
        day: date,
        reminder,
      }),
    });
    // .then(() => {
    //   getTasks();
    // });

    const data = await res.json();
    console.log(id, data);
    setTask([...tasks, data]);

    console.log("response : ", res);
    console.log("AddTask workind! : ", text);
    console.log("AddTask workind! : ", date);
    console.log("AddTask workind! : ", reminder);
    //   setTask([
    //     ...tasks,
    //     {
    //       id,
    //       text,
    //       day: date,
    //       reminder,
    //     },
    //   ]);
    //   id++;
  };
  return (
    <Router>
      <div className="container">
        <Header taskForm={taskForm} showAddTask={showAddTask} />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask addTask={addTask} />}
              {tasks.length === 0 ? (
                "No Task To Show"
              ) : (
                <Tasks
                  tasks={tasks}
                  deleteTask={deleteTask}
                  reminder={reminder}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
