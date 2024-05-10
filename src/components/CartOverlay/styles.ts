import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface CartOverlayProps {
  isOpen: boolean;
}

export const CartOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<CartOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 560px;
  height: 100%;

  background-color: #2a52be;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h1 {
    color: white;
  }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  color: white;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-left: 2.5rem;
  padding: 15px;
  width: 90%;
`;

export const ItemsGrid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  max-height: 500px;
  overflow-y: auto;
`;
export const CartItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 85px;
  background-color: #fff;
  margin-top: 0.9rem;
  border-radius: 10px;
`;

export const ProductName = styled.p`
  color: #666;
`;
export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const ProductPrice = styled.p`
  color: #fff;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const RemoveItemIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  color: white;
  border-radius: 50%;
  transform: translate(20%, -41%);
  font-size: 18px;
  cursor: pointer;
`;

export const CartItemQuantitySelector = styled.div`
  display: flex;
  border: 1px solid gray;
  padding: 6px 10px;
  border-radius: 7px;
  text-align: center;
  gap: 10px;
  button {
    border: none;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const TotalPrice = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  color: white;

  h1 {
    font-size: 1.6rem;
  }
`;

export const Purchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: black;
  cursor: pointer;
`;
