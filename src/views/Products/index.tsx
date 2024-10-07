import Head from "next/head";
import StylesProducts from "@/views/Products/Products.module.css";

import Loading from "@/components/layouts/Loading";
import Image from "next/image";

type ProductType = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

const ProductPage = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="container flex m-auto justify-center w-full gap-5">
        {products.length > 0 ? (
          products.map((product: ProductType) => (
            <div className={StylesProducts.card} key={product.id}>
              <Image src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <h4>{product.price}</h4>
              <h4>{product.category}</h4>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ProductPage;
