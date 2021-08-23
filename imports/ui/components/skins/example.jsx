import React from 'react';
import styled from 'styled-components'

const title = "Welcome to Example net|com"

const StyledSplash = styled.div`
  background-color: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #fff;
    text-align: center;
  }
`

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin