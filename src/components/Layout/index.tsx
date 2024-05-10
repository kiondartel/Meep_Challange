import NavBar from "../Navbar";
import { Container, MainContent } from "./styles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <MainContent>
        <NavBar />
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default Layout;
