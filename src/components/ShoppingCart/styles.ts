import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 8px 25px;
  border-radius: 10px;
  gap: 7px;
  cursor: pointer;
  margin-right: 5rem;
  @media (max-width: 550px) {
    margin-right: 0;
  }
`;

export const CartItemCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
