import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";
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
        <DetailProduct product={isLoading ? {} : data.products} />
      </div>
    </>
  );
};

export default ProductParams;
