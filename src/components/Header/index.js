import React from 'react'
import { Container, ButtonContainer, Text, MenuText } from './styles'

export default function Header() {

  return (
    <Container>

      <Text>Web Cinema</Text>

      <ButtonContainer>
        <MenuText>Filmes</MenuText>
      </ButtonContainer>

      <ButtonContainer>
        <MenuText>Em Breve</MenuText>
      </ButtonContainer>

      <ButtonContainer>
        <MenuText>Em Cartaz</MenuText>
      </ButtonContainer>

      <ButtonContainer>
        <MenuText>Ingressos</MenuText>
      </ButtonContainer>


    </Container>
  )
}