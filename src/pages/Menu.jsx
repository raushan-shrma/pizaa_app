import pizzas from "../data/pizzas";
import PizzaCard from "../components/PizzaCard";
import "../index.css";

function Menu({addToCart}){

  return(

    <div className="menu">

      <h1 className="menu-title">Our Pizza Menu</h1>

      <div className="pizza-container">

        {pizzas.map((pizza)=>(
          <PizzaCard
          key={pizza.id}
          pizza={pizza}
          addToCart={addToCart}
          />
        ))}

      </div>

    </div>

  )

}

export default Menu