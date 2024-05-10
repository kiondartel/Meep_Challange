import styled from "styled-components";
export const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  gap: 15px;
  flex-direction: column;
  margin-left: 20px;
`;

export const ProductTitle = styled.h1`
  color: #333;
`;

export const ProductImage = styled.img`
  width: auto;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ProductDescription = styled.p`
  color: #666;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #f49867;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ae67fa;
  }
`;
