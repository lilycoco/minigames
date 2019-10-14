import React, { useState } from 'react'
import { GameContainer } from '../layouts/Style'
import { TimeGage } from '../layouts/timer/TimeGage'
import { InfoFilter } from '../layouts/infoFilter/InfoFilter'
import { Items } from './Items'

export const EggCatch = () => {
  const [gameRunning, setGameRunning] = useState(false)
  const toggleRunning = () => setGameRunning(!gameRunning)

  return (
    <div>
      <GameContainer>
        <Items gameRunning={gameRunning} />
        {gameRunning || (
          <InfoFilter
            toggleRunning={toggleRunning}
            gameStartInfo={'おちてくるたまごをキャッチしよう！'}
          />
        )}
      </GameContainer>
      <TimeGage gameRunning={gameRunning} toggleRunning={toggleRunning} />
    </div>
  )
}
