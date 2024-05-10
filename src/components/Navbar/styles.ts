import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 20px;
  background-color: #2a52be;
`;

export const Brand = styled(Link)`
  display: flex;

  align-items: end;
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 5rem;
  h1 {
    line-height: 44px;
    margin-bottom: 0;
  }
  p {
    font-size: 23px;
    transform: scaleX(0.7);
    font-weight: 100;
    letter-spacing: 1.5px;
  }

  @media (max-width: 550px) {
    margin-left: 0;
  }
`;
