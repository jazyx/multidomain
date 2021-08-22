import React from 'react';
import styled from 'styled-components'

const title = "Welcome to Meteor1!"

const StyledSplash = styled.div`
  background-color: #cfc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #393;
    text-align: center;
  }
`

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin