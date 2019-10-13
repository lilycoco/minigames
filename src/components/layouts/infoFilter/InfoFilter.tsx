import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper } from './Style'

export const InfoFilter = ({
  toggleRunning,
  gameStartInfo,
}: {
  toggleRunning: () => void
  gameStartInfo: string
}) => (
  <InfoFlame>
    <ButtonWrapper>
      <StartButton onClick={toggleRunning}>スタート</StartButton>
      <Info>{gameStartInfo}</Info>
    </ButtonWrapper>
  </InfoFlame>
)
