import React from 'react'
import styled from 'styled-components'

import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo-react-zzaria.svg'

const Login = () => (
  <Container>
    <Grid
      container
      direction='column'
      alignItems='center'
    >
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <Button>Entra com Github</Button>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

export default Login
