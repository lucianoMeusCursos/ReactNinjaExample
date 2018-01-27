'use strict'

import React from 'react'

const Page = ({ page }) => {
  const Component = page === '...' ? 'span' : 'a' // Criamos aqui essa constante que vai recerber o valor de page e se ele for `...` vai retornar uma string span se não vai retornar uma string a e assim montamos nossa tag abaixo
  return (
    <Component href='#'>
      {page}
    </Component>
  )
}

export default Page
