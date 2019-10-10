import React from 'react'
import { GameContainer, Charactor } from '../Style'
import hiyoko from '../../static/icon/hiyoko.png'

export const HiyokoGame = () => (
  <GameContainer style={{ backgroundColor: 'white' }}>
    <div>
      <Charactor src={hiyoko} alt='man' />
    </div>
  </GameContainer>
)
