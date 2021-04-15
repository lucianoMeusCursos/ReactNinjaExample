import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import t from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'

// Fazendo o import dinâmico.
const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const { isUserLoggedIn } = userInfo
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setDidCheckUserIn(true)
    })

    window.logout = logout
  }, [])

  // Se usuário esta logado ou não. Enquanto isso mostra loading
  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  // Se usuário estiver logado e na página de login
  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  // Se usuário não estiver logado e não estiver na página de login
  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    // Suspense faz parte do import dinâmico
    // é nele que precisamos colocar como filho
    // os componentes que queremos dinâmicos.
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
