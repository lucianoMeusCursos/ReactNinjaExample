import React from 'react'

import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo-react-zzaria.svg'

const Login = () => (
  <>
    <Grid container>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <Button>Entra com Github</Button>
      </Grid>
    </Grid>
  </>
)

export default Login
