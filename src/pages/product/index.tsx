import ProductPage from "@/views/Products";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Product = () => {
  const router = useRouter();
  const { data, /**error */ isLoading } = useSWR(`/api/products`, fetcher);
  // const { products } = data;
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((data) => data.json())
  //     .then((response) => setProducts(response?.products))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <ProductPage products={data ? data.products : []} />
    </>
  );
};

export default Product;
