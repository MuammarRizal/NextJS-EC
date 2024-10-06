import Head from "next/head";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  size: string;
  price: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((data) => data.json())
      .then((response) => setProducts(response?.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      {products.map((product: ProductType) => (
        <div className="card" key={product.id}>
          <h4>{product.name}</h4>
          <h4>{product.price}</h4>
          <h4>{product.size}</h4>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
