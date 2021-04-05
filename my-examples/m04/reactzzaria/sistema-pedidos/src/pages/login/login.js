import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'

import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

const config = {
  apiKey: 'AIzaSyBbFQSbF3k-_ZAnDRULvZO7F2fsWquVCS4',
  authDomain: 'reactzzaria-af7ae.firebaseapp.com',
  projectId: 'reactzzaria-af7ae',
  storageBucket: 'reactzzaria-af7ae.appspot.com',
  messagingSenderId: '18945026297',
  appId: '1:18945026297:web:fb2b0b41e20ef1ab901a28',
  measurementId: 'G-D7DX39LT29'
}

firebase.initializeApp(config)

const Login = () => (
  <Container>
    <Grid
      container
      justify='center'
      spacing={10}
    >
      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GithubButton>
          Entra com Github
        </GithubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 20px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
