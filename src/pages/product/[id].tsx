import { useRouter } from "next/router";

const ProductParams = () => {
  const { query } = useRouter();
  return <div>Product : {query.id}</div>;
};

export default ProductParams;
