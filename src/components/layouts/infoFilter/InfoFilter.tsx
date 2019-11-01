import React from 'react'
import {
  InfoFlame,
  Info,
  StartButton,
  ButtonWrapper,
  RamenImage,
  PointList,
  Eggs,
  Point,
  EggContainer,
} from './Style'
import droppingEgg0 from '../../../static/icon/egg_0.png'
import droppingEgg1 from '../../../static/icon/egg_1.png'
import droppingEgg2 from '../../../static/icon/egg_2.png'
import droppingEgg3 from '../../../static/icon/egg_3.png'
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
        <Info>{gameStartInfo}</Info>
        <PointList>
          <EggContainer>
            <Eggs src={droppingEgg0} alt='droppingEgg0' />
            <Point>1てん</Point>
          </EggContainer>
          <EggContainer>
            <Eggs src={droppingEgg1} alt='droppingEgg1' />
            <Point>2てん</Point>
          </EggContainer>
          <EggContainer>
            <Eggs src={droppingEgg2} alt='droppingEgg2' />
            <Point>3てん</Point>
          </EggContainer>
          <EggContainer>
            <Eggs src={droppingEgg3} alt='droppingEgg3' />
            <Point>4てん</Point>
          </EggContainer>
        </PointList>
        <StartButton onClick={startGame}>スタート</StartButton>
      </ButtonWrapper>
    )}
  </InfoFlame>
)
