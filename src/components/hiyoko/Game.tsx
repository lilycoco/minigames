import React from 'react'
import { GameContainer, Charactor, Egg, Egg2, Egg3 } from '../Style'
import hiyoko from '../../static/icon/hiyoko.png'
import egg from '../../static/icon/egg.png'
import egg0 from '../../static/icon/egg_0.png'
import egg1 from '../../static/icon/broken_egg_2.png'

export const HiyokoGame = () => (
  <GameContainer style={{ backgroundColor: 'white' }}>
    <Egg src={egg} alt='egg' />
    <Egg2 src={egg0} alt='egg0' />
    <Egg3 src={egg1} alt='egg1' />
    <Charactor src={hiyoko} alt='hiyoko' />
  </GameContainer>
)
