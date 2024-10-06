import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Login = () => {
  const router = useRouter();
  const onHandlerLogin = () => {
    router.push("/product");
  };
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={onHandlerLogin}>Login</button>
      <p>
        Anda belum punya akun ? register{" "}
        <Link className="text-green-400" href={"/auth/register"}>
          Disini
        </Link>
      </p>
    </>
  );
};

export default Login;
