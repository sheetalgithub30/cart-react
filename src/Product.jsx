function Product({
  image,
  name,
  price,
  id,
  quantity,
  handleIncrement,
  handleDecrement,
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
          <button id="sub" onClick={() => handleDecrement(index)}>
            <i class="fa-solid fa-circle-minus"></i>
          </button>
          <span>{quantity}</span>
          <button
            id="add"
            onClick={() => {
              handleIncrement(index);
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
