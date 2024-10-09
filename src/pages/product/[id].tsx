import { useRouter } from "next/router";
import useSWR from "swr";
import NameProduct from "./Name";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductParams = () => {
  const { query } = useRouter();
  const { data, /**error */ isLoading } = useSWR(
    `/api/products/${query.id}`,
    fetcher
  );

  return (
    <>
      <div>
        Product : {query.id}
        <NameProduct name={isLoading ? "Jange" : data.products.name} />
      </div>
    </>
  );
};

export default ProductParams;
