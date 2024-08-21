import './Button.css';


function Button(props)
{
  const styles = {
    backgroundColor: props.color,
  }
  
  return(
    <div> 
      <button style={styles} onClick={props.onClick} className='button'> {props.texto} </button>
    </div>
  )
}


export default Button;
