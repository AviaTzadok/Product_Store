import "./Product.css";
import { Link } from "react-router-dom";

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
      <div>
        <Link to={`/productPage/${id}`}>{title}</Link>
      </div>
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
