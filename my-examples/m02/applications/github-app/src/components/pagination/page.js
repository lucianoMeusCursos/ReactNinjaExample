'use strict'

import React from 'react'
const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? 'span' : 'a'
  const href = page === '...' ? null : pageLink
  return (
    <Component href={href} onClick={(e) => {
      e.preventDefault()
      onClick(page)
    }}>
      {page}
    </Component>
  )
}

export default Page
