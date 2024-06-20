import { useContext , useEffect } from "react"
import { cartContext } from "./App"

import Product from "./Product"

function Left() {

  const { products , setProducts , total , setTotal , cart , setCart} = useContext(cartContext)

  
  useEffect(()=>{
    let totalAmount = 0;
    if(cart.length > 0){
    cart.forEach((item,index)=>{
     totalAmount += Number(item.price) * Number(item.quantity);
    })
    setTotal(totalAmount);
  }
   },[cart])

   useEffect(()=>{
       let copyArray = [...products];
       setCart(copyArray.filter((item,index)=>{
        return item.quantity > 0;
       }))
   },[products])



  function handleDecrement(index){
    let copyCart = [...products];

    if(copyCart[index]["quantity"]>0){
    copyCart[index]["quantity"] -=1;}
    setProducts(copyCart)

}

function handleIncrement(index){
  let copyCart = [...products];
  copyCart[index]["quantity"] += 1;
  setProducts(copyCart)

}

  return (
   <>
     <div id="left">
       <h1>Products</h1>

     { products.map((data,idx)=>{
        return <Product key={idx}
         image={data.src}
          name={data.name}
            price={data.price}
             id={data.id}
              quantity={data.quantity} 
           handleDecrement={handleDecrement} handleIncrement={handleIncrement} index={idx}/>
     })   
    }
     </div>
   </>
  )
}

export default Left