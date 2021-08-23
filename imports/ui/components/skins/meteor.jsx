import React from 'react';
import styled from 'styled-components'

const title = "Welcome to plain Meteor!"

const StyledSplash = styled.div`
  background-color: #ccc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #999;
    text-align: center;
  }
`

const Skin = () => (
  <StyledSplash>
    <h1>{title}</h1>
  </StyledSplash>
)

export default Skin