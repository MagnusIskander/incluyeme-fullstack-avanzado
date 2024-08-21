import './Button.css';


const Button = (props) =>
{
  const styles = {
    backgroundColor: props.color,
  }
  
  return (
    <div> 
      <button style={styles} onClick={props.onClick} className='button'> {props.text} </button>
    </div>
  );
};


export default Button;
