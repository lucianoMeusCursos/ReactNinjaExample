import React from 'react';
import styled from 'styled-components';

const VideoSingle = () => (
  <Container>
    <Iframe width="560" height="480" src="https://www.youtube.com/embed/5qap5aO4i9A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <Title>Título do vídeo</Title>
  </Container>
)


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  width: 100%;
`

const Title = styled.h2`
  padding: 10px;
`

export default VideoSingle
