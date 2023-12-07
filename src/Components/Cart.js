import React,{useState} from 'react'

const Cart = () => {
const [quantity, setQuantity] = useState(0);
 function increasQuantity(){
      setQuantity(quantity+1);
 }
 function decreaseQuanity(){
    console.log("hello");
     if(quantity>1){
        setQuantity(quantity-1);
     }
 }
  return (
    <div>
        <p>Quantity: {quantity} </p>
        <button onClick={increasQuantity}>+</button>
        <button onClick={decreaseQuanity}>-</button>
    </div>
  )
}

export default Cart