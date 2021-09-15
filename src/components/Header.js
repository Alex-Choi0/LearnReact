import Button from './Button';

const Header = () => {
  const onClick = () => {
    console.log("Hello");
  }
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color='green' text='Hello' onClick = {onClick}/>
    </header>
  )
}

// const headingStyle = {color: 'red', backgroundColor: 'black'};

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

export default Header
