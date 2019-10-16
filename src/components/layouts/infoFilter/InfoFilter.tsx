import React from 'react'
import { InfoFlame, Info, StartButton, ButtonWrapper, Ramen } from './Style'
// import ramen from '../../../static/img/ramen.jpg'

export const InfoFilter = ({
  toggleRunning,
  gameStartInfo,
  startTime,
}: {
  toggleRunning: () => void
  gameStartInfo: string
  startTime: number
}) => (
  <InfoFlame>
    {startTime ? (
      <div>
        <Info style={{ marginTop: '8%', lineHeight: '150%' }}>
          できあがり！
          <br />
          とくてん<span style={{ color: 'red', fontSize: '150%' }}>１０</span>てん
        </Info>
        <Ramen />
      </div>
    ) : (
      <ButtonWrapper>
        <StartButton onClick={toggleRunning}>スタート</StartButton>
        <Info>{gameStartInfo}</Info>
      </ButtonWrapper>
    )}
  </InfoFlame>
)
