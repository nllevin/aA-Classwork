import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <div>
      <NavLink to="/">Index</NavLink>
      <br />
      <NavLink to="/new">Create New</NavLink>
    </div>
);

export default Nav;