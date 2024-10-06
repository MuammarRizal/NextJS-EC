import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductPage = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  //   const { push } = useRouter();
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h2>Hello products page</h2>
    </>
  );
};

export default ProductPage;
