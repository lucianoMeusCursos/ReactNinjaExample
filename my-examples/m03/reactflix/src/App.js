import React from 'react';
import { connect } from 'react-redux';
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

const App = ({ isRegisterVideoFormOpened }) => (
  <Container>
    <GlobalStyle />
    <Header />

    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
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
const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})


export default connect(mapStateToProps)(App);
