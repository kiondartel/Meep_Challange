import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 6.5rem;
  margin-left: 30px;
  @media (max-width: 1510px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: #fff;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 10px;
`;

export const ProductName = styled.h3`
  color: #666;
  width: 70%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.3em;
  text-align: left;
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #363634;
`;

export const ProductDescription = styled.p`
  width: 50%;
  margin: 4px 0;
  color: #666;
  margin-right: auto;
  margin-left: 15px;

  font-size: 0.7em;
`;

export const BuyButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;

  height: auto;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  svg {
    margin-right: 15px;
  }
`;
