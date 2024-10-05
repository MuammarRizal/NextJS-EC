import React from "react";

const Navbar = () => (
  <>
    <nav className="navbar-container flex p-3 bg-slate-300 text-slate-800 justify-around">
      <div className="logo">Logo</div>
      <div className="nav-items">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
