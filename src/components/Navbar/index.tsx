import React from "react";

import { NavbarContainer, Brand } from "./styles";

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <Brand to="/">
        <h1>Meep</h1>
      </Brand>
    </NavbarContainer>
  );
};

export default NavBar;
