import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

type AppShell = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShell) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
