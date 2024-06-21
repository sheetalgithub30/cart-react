function Product({
  image,
  name,
  price,
  quantity,
  increment,
  decrement,
  index,
}) {
  return (
    <>
      <div id="product">
        <div id="img">
          <img src={image} />
        </div>

        <div id="name">
          <h3>{name}</h3>
          <p>$ {price}</p>
        </div>

        <div id="buttons">
          <button id="sub" 
          onClick={() =>{
           decrement(index);
           }}>
            <i class="fa-solid fa-circle-minus"></i>
          </button>
          <span>{quantity}</span>
          <button
            id="add"
            onClick={() => {
              increment(index);
            }}
          >
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
