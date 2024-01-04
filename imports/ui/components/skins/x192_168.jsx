import React from 'react';
import styled from 'styled-components'

const title = "Welcome to 192.168.x.x"

const StyledSplash = styled.div`
  background-color: #003;
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