

// import React, { useContext } from 'react'
// import Cart from "./Cart"
// import { cartContext } from './App';

// function Right() {
//   const {cart , setCart , total } = useContext(cartContext);


//   return (
//    <>
//     <div id="right">
//     <h1>Cart</h1>
     
//      {cart.length > 0 ? 
//      (<div>
//       <div id="cart">
//         {cart.map((item,index)=>{
//           return <Cart key={index} item={item}/>
//         })}
     
//       </div>
      
//       <div id="total">
//         <p>Total -- ${total.toFixed(2)}  </p>
//       </div>
//      </div>)

//      : <div id="error">!!! Card is Empty !!!</div>
//      }
//     </div>
//    </>
//   )
// }

// export default Right