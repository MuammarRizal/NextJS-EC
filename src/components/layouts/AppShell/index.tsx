import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import { useRouter } from "next/router";

type AppShell = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShell) => {
  const { pathname } = useRouter();
  const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

  return (
    <>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disabledNavbar.includes(pathname) && <Footer />}
    </>
  );
};

export default AppShell;
