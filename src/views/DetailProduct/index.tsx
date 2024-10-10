import React from "react";

const DetailProduct = ({
  product,
}: {
  product: { image: string; name: string; price: number; category: string };
}) => {
  return (
    <>
      <div className="w-48 overflow-hidden">
        <img src={product.image} alt={product.name} width={300} />
        <h4>{product.name}</h4>
        <h4>{product.price}</h4>
        <h4>{product.category}</h4>
      </div>
    </>
  );
};

export default DetailProduct;
