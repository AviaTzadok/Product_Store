import "./Product.css";
// product
function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}) {
  return (
    <div className="Product-card">
      <div>{title}</div>
      <div className="Product-image">
        <img src={image} />
      </div>

      <div className="Product-info">
        {rate}
        {count}
        <h5>{category}</h5>

        <h6>{price}</h6>
      </div>
    </div>
  );
}
export default Product;
