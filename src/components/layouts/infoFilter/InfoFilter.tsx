import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper, RamenImage } from './Style'

export const InfoFilter = ({
  toggleRunning,
  gameStartInfo,
  startTime,
  point,
}: {
  toggleRunning: () => void
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
          とくてん<span style={{ color: 'red', fontSize: '150%' }}>{point}</span>てん
        </Info>
        <RamenImage />
      </div>
    ) : (
      <ButtonWrapper>
        <StartButton onClick={toggleRunning}>スタート</StartButton>
        <Info>{gameStartInfo}</Info>
      </ButtonWrapper>
    )}
  </InfoFlame>
)
