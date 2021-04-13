import React, { createContext, useCallback } from 'react'
import t from 'prop-types'
import firebase from 'services/firebase'

export const AuthContext = createContext()

function Auth ({ children }) {
  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  return (
    <AuthContext.Provider value={{
      handleLogin
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth
