import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

import App from './app'
import AuthProvider from 'contexts/auth'

const theme = createMuiTheme({})

console.log(theme)

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <BrowserRouter>
          {/*
              Colocando as informações de rota dentro do App
              utilizando o componente Route
            */}
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default hot(module)(Root)
