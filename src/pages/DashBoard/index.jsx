import React from 'react'

import { Container, StyledIframeContainer, StyledIframe } from './styles'
import { Menu } from '../../components/Menu'

export function DashBoard () {
  return (
    <Container>
      <Menu />
      {/* IFRAME */}

         <StyledIframeContainer>
        <StyledIframe title="Dash InventoMax" width="600" height="373.5" src="" frameborder="0" allowFullScreen="true" />
      </StyledIframeContainer>
    </Container>
  )
}
