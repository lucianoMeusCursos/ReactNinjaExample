import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ADD_VIDEO } from '../../redux-flow/reducers/videos/actions';

const RegisterVideo = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo:</h2>

    <label htmlFor="id">ID do vídeo:</label>
    <input type="text" id="id" name="id"/>

    <label htmlFor="title">Título do vídeo:</label>
    <input type="text" id="title" name="title"/>

    <button type="submit">Cadastrar</button>
  </Form>
);

const Form = styled.form`
  padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch({
      type: ADD_VIDEO,
      payload: {
        id: 'jujuba',
        title: 'Um video sobre jujubas'
      }
    })
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
