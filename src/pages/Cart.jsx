import "../index.css";

function Cart({cart}){

  const total = cart.reduce((sum,item)=>sum+item.price,0)

  return(

    <div className="cart">

      <h1>Your Cart</h1>

      {cart.map((item)=>(
        <div className="cart-item" key={item.id}>

          <span>{item.name}</span>
          <span>₹{item.price}</span>

        </div>
      ))}

      <div className="total">
        Total : ₹{total}
      </div>

    </div>

  )

}

export default Cart