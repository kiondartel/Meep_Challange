import { LoadingSpinner, StyledLoaderContainer } from "./styles";
import React from "react";

const Loader: React.FC = () => {
  return (
    <StyledLoaderContainer>
      <LoadingSpinner />
    </StyledLoaderContainer>
  );
};

export default Loader;
