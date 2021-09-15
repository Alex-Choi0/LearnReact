import Button from "./Button";

const Header = ({ taskForm, showAddTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAddTask ? "red" : "blue"}
        text={showAddTask ? "Close" : "Open"}
        taskForm={taskForm}
        showAddTask={showAddTask}
      />
    </header>
  );
};

// const headingStyle = {color: 'red', backgroundColor: 'black'};

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

export default Header;
