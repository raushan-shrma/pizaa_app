import "../index.css";

function PizzaCard({pizza,addToCart}){

  return(

    <div className="pizza-card">

      <img src={pizza.image}/>

      <h3>{pizza.name}</h3>

      <p>₹{pizza.price}</p>

      <button onClick={()=>addToCart(pizza)}>
        Add To Cart
      </button>

    </div>

  )

}

export default PizzaCard