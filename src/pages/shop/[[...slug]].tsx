import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  console.log(query);
  return (
    <div className="container">
      <h2>Hello Jangs</h2>
      <h4>{query.slug ? query.slug[0] : "Hello"}</h4>
    </div>
  );
};

export default ShopPage;
