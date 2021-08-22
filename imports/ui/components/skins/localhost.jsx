import React from "react";
import styled from "styled-components";

const title = "Welcome to Localhost!";

const StyledSplash = styled.div`
  background-color: #fcc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #933;
    text-align: center;
  }
`;

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin;
