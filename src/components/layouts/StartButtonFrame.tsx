import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper } from './Style'

export const StartButtonFrame = ({
  toggleStart,
  gameInfo,
}: {
  toggleStart: () => void
  gameInfo: string
}) => (
  <InfoFlame>
    <ButtonWrapper>
      <StartButton onClick={toggleStart}>スタート</StartButton>
      <Info>{gameInfo}</Info>
    </ButtonWrapper>
  </InfoFlame>
)
