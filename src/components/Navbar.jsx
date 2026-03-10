import { Link } from "react-router-dom";
import "../index.css";

function Navbar(){

  return(
    <div className="navbar">

      <h2>🍕 PizzaStore</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
      </div>

    </div>
  )

}

export default Navbar