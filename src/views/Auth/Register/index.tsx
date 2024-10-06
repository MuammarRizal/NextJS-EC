import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <div>RegisterPage</div>
      <p>
        Anda sudah punya akun ? Login
        <Link className="text-green-400" href={"/auth/login"}>
          Disini
        </Link>
      </p>
    </>
  );
};

export default Register;
