import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper, RamenImage } from './Style'

export const InfoFilter = ({
  startGame,
  gameStartInfo,
  startTime,
  point,
}: {
  startGame: () => void
  gameStartInfo: string
  startTime: number
  point: number
}) => (
  <InfoFlame>
    {startTime ? (
      <div>
        <Info style={{ marginTop: '8%', lineHeight: '150%' }}>
          できあがり！
          <br />
          とくてん<span style={{ color: 'red', fontSize: '150%' }}> {point}</span>
          <span style={{ fontSize: '70%' }}>てん</span>
        </Info>
        <RamenImage />
      </div>
    ) : (
      <ButtonWrapper>
        <StartButton onClick={startGame}>スタート</StartButton>
        <Info>{gameStartInfo}</Info>
      </ButtonWrapper>
    )}
  </InfoFlame>
)
