import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0% 20%;
  min-height: 10vh;
  background: rgba(255, 255, 255, 0.6);
  z-index: 10;
  backdrop-filter: blur(10px);

  .logo {
    font-weight: bold;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: .9rem;
  }
`;

const LinkContainer = styled.div`

  a, button {
    margin-left: 2rem;
    cursor: pointer;
  }

  button {
    padding: .4rem 2rem;
    font-size: .8rem;
    background-color: #3056f5;
    color: white;
    border: none;
    border-radius: 1rem;
  }

`;

export default function Nav() {
  return (
    <Root>
        <a href='/' className='logo'>iPhone 13 Pro</a>
        <LinkContainer>
            <a href='/'>Overview</a>
            <a href='/'>Switching to iPhone</a>
            <a href='/'>Tech Specs</a>
            <button>Buy</button>
        </LinkContainer>
    </Root>
  )
}
