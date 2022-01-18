import "./ProductPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Product from "../Product/Product";

export default function ProductPage() {
  const [productPage, setProductPage] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((products) => {
        setProductPage(products);
      });
  }, []);
  console.log(productPage);
  let { id } = useParams();
  console.log(id);
  let product = productPage.find((v) => v.id == id);
  console.log(product);
  if (product == undefined) {
    return <div></div>;
  }
  return (
    <div>
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}
        rate={product.rating?.rate}
        count={product.rating?.count}
      />
    </div>
  );
}
