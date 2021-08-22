import React from 'react';
import styled from 'styled-components'

const title = "Meteor2 Welcomes You!"

const StyledSplash = styled.div`
  background-color: #cff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #399;
    text-align: center;
  }
`

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin