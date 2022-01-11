import "./Products.css";
import Product from "../Product/Product";
// Check
function Products({ productsArr }) {
  return (
    <section className="Products">
      {productsArr.map((v) => (
        <Product
          key={v.id}
          id={v.id}
          title={v.title}
          price={v.price}
          description={v.description}
          category={v.category}
          image={v.image}
          rate={v.rating?.rate}
          count={v.rating?.count}
        />
      ))}
    </section>
  );
}

export default Products;
