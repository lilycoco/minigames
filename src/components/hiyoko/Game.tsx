import React from 'react'
import { GameContainer, Charactor, Egg, Egg2 } from '../Style'
import hiyoko from '../../static/icon/hiyoko.png'
import egg from '../../static/icon/egg.png'
import egg0 from '../../static/icon/egg_0.png'

export const HiyokoGame = () => (
  <GameContainer style={{ backgroundColor: 'white' }}>
    <Egg src={egg} alt='egg' />
    <Egg2 src={egg0} alt='egg0' />
    <Charactor src={hiyoko} alt='hiyoko' />
  </GameContainer>
)
