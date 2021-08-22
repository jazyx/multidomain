import React from 'react';
import styled from 'styled-components'

const title = "Welcome to the StopGap School!"

const StyledSplash = styled.div`
  background-color: #ccf;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #339;
    text-align: center;
  }
`

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin