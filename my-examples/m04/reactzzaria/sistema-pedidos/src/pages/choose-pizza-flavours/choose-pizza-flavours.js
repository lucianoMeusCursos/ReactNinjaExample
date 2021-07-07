import React, { useState } from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card as MaterialCard,
  Grid,
  Typography
} from '@material-ui/core'
import { CardLink, Divider, HeaderContent, H3, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'

import pizzaFlavours from 'fake-data/pizzas-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState({})
  console.log('logo de cara', checkboxes)
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  const handleChangeCheckBox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true) {
      return
    }

    setCheckboxes((checkboxes) => {
      console.log('handleChangeCheckBox', checkboxes)
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }
  return (
    <>
      <HeaderContent>
        <H3>
          Escolha até {`${flavours} ${singularOrPlural(location.state.flavours, 'sabor', 'sabores')}`}
        </H3>
      </HeaderContent>
      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <CheckBox
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckBox(pizza.id)}
                />
                <Img src={pizza.image} alt={pizza.name} />
                <Divider />
                <Typography>{pizza.name}</Typography>
                <Typography variant='h5'>{pizza.value[id]}</Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
