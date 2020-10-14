import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single.js';

import 'normalize.css';
import 'milligram';

const GlobalStyle = createGlobalStyle`
  html, body, #root, #root > div {
    height: 100%;
  }
`

const App = () => (
  <Container>
    <GlobalStyle />
    <Header>
      <h1>ReactFlix</h1>
    </Header>
    <Main>
      <VideoSingle />
      <VideosList />
    </Main>
    <Footer>
      Rodape copyright
    </Footer>
  </Container>
)

const headerHeight = '60px';
const footerHeight = '30px';

const Container = styled.div``

const Header = styled.header`
  height: ${headerHeight};
  background-color: #333;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`



const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App;
