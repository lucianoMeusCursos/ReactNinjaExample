import React from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'

import { HeaderContent, H3 } from 'ui'
import { singularOrPlural } from 'utils'

import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state

  return (
    <>
      <HeaderContent>
        <H3>
          Escolha até {`${flavours} ${singularOrPlural(location.state.flavours, 'sabor', 'sabores')}`}
        </H3>
      </HeaderContent>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
