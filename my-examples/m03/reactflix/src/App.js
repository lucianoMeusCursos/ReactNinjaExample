import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { headerHeight, footerHeight } from './utils/constants';
import Header from './components/header'
import Footer from './components/footer'
import VideosList from './components/video-list';
import VideoSingle from './components/video-single';
import RegisterVideo from './components/register-video';
import { fetchVideos } from './redux-flow/reducers/videos/actions-creators';

import 'normalize.css';
import 'milligram';

const GlobalStyle = createGlobalStyle`
  html, body, #root, #root > div {
    height: 100%;
  }
`

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterVideoFormOpened } = this.props;

    return (
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
  }
}

const Container = styled.div``

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`
const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

const mapDispatchToProps = { fetchVideos }


export default connect(mapStateToProps, mapDispatchToProps)(App);
