import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const FilterByStatusContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4.5rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  margin-left: 30px;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-bottom: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Image = styled.img`
  width: 80%;
  margin-bottom: 16px;
`;
