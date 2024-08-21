import './Section.css';
import mainCover from '../../assets/jumbotron.webp';
import Button from '../button/Button';


const Section = () =>
{
  const buttonHandleClick = () =>{
    alert ('You hit the button');
  }
  return (
  <section className="section">

    <h2> Story of Books </h2>
    <p> Books are... </p>
    <img src={mainCover} alt="Book cover as main image" />

    <Button color="pink" text="Read more" onClick={buttonHandleClick} />

    <Button className="button" text="Buy" onClick={buttonHandleClick} />

  </section>
  );
};


export default Section;
