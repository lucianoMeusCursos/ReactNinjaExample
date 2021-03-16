import React from 'react';
import { footerHeight } from './../utils/constants';
import styled from 'styled-components';

const MainFooter = () => (
  <Footer>
    &copy; copyright
  </Footer>
)

const Footer = styled.footer`
  align-items: center;
  background: #333;
  color: #fff;
  display: flex;
  height: ${footerHeight};
  justify-content: center;
`


export default MainFooter
