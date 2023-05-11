import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 0;
  border-top: 1px solid #eee;
  justify-content: center;

  .left {
    margin-right: auto;
  }

  div {
    padding-left: 15px;
  }

  .border {
    border-right: 1px solid black;
    padding-right: 15px;
  }
`;

export default function Footer() {
  return (
    <Root>
        <div className='left'> 
            Copyright © 2023 Michael-Paul Cuccia 
        </div>
        <div className='border'>
            Privacy Policy   
        </div>
        <div className='border'>
            Terms of Use    
        </div>
        <div className='border'>
            Sales and Refunds 
        </div>
        <div className='border'>
            Legal 
        </div>
        <div>
            Site Map 
        </div>
       
    </Root>
  )
}
