import "./Products.css";
import Product from "../Product/Product";
// Check
function Products({ cart }) {
  return (
    <section className="Products">
      {cart.map((v) => (
        <ProductCart
          key={v.id}
          id={v.id}
          title={v.title}
          price={v.price}
          image={v.image}
        />
      ))}
    </section>
  );
}

export default Products;

// description={v.description}
// category={v.category}
// rate={v.rating?.rate}
// count={v.rating?.count}
