function Cart({ item }) {
  return (
    <>
      <div id="cart-inner">
        <img src={item.src} alt="" />
        <h3>{item.name}</h3>
        <div id="quantity">
          <p>{item.quantity}</p>
          <span> X </span>
          <p>{item.price}</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
