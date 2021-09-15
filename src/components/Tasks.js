import Task from "./Task";

const Tasks = ({ tasks, deleteTask, reminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          reminder={reminder}
        />
      ))}
    </>
  );
};

export default Tasks;
