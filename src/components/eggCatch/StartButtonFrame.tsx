import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper } from './Style'

export const StartButtonFrame = ({ toggleStart }: { toggleStart: () => void }) => (
  <InfoFlame>
    <ButtonWrapper>
      <StartButton onClick={toggleStart}>スタート</StartButton>
      <Info>おちてくるたまごをキャッチしよう！</Info>
    </ButtonWrapper>
  </InfoFlame>
)
