import React from 'react'
import { Container } from './styles'
import { Menu } from '../../components/Menu'
import { Movements } from '../../components/Movements'

export function Input () {
  return (
    <Container>
      <Menu />
      <Movements title="Entrada"/>
    </Container>
  )
}

