import { Link } from "react-router-dom";
import './Menu.css'


const Menu = () =>
{
  return (
    <nav className="menu">
    
      <ul>
      
        <li> <Link to ="/"> Home </Link> </li>
        <li> <Link to ="/books"> Books Manager </Link> </li>
        <li> <Link to ="/library"> Open Library </Link> </li> 

      </ul>

    </nav>
  );
};


export default Menu;
