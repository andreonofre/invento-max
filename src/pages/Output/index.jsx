import React from 'react'
import { Container } from './styles'
import { Menu } from '../../components/Menu'
import { Movements } from '../../components/Movements'

export function Output () {
  return (
    <Container>
      <Menu />
      <Movements title="Saída" />
    </Container>
  )
}
