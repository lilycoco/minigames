import React from 'react'
import { GameContainer } from '../Style'
import man from '../../static/icon/man_white.png'

export const InvaderGame = () => (
  <GameContainer style={{ backgroundColor: 'black' }}>
    <div>
      <img src={man} alt='man' />
    </div>
  </GameContainer>
)
