import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { headerHeight, footerHeight } from './utils/constants';
import Header from './components/header'
import Footer from './components/footer'
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single.js';
import RegisterVideo from './components/register-video';

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
    <Header />

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
)



const Container = styled.div``

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`



export default App;
