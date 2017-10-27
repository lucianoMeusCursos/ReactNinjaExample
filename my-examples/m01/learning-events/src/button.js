'use strict'

import React from 'react'

const Button = ({ children, handleClick, nameClass }) => (
  <button className={"main-button " + `${nameClass}`} onClick={handleClick}>
    {children}
  </button>
)

export default Button
