import { DataProduct } from "@/types/Products.type";
import ProductPage from "@/views/Products";
import React from "react";

const SsrPage = ({ data }: { data: DataProduct }) => {
  return (
    <>
      <ProductPage products={data.products} />
    </>
  );
};

export default SsrPage;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
