import React, { useContext, useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography,
  withStyles
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

import { AuthContext } from 'contexts/auth'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = (e) => {
    setAnchorElement(null)
  }

  return (
    <>

      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography color='inherit'>
            Olá {userName}
          </Typography>

          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>

          <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h3'>
              O que vai ser {userName} ;-)
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </>
  )
}

const Toolbar = styled(MaterialToolbar)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`

const Content = styled.main`
  padding: 20px;
`

const style = (theme) => ({
  main: theme.mixins.toolbar
})
const SpaceWrapper = ({ classes }) => (
  <div className={classes.main} />
)

const Spacer = withStyles(style)(SpaceWrapper)

SpaceWrapper.propTypes = {
  classes: t.object
}

export default Main
