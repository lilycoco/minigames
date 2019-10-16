import React, { useState, useRef } from 'react'
import { GameContainer } from '../layouts/Style'
import { TimeGage } from '../layouts/timer/TimeGage'
import { InfoFilter } from '../layouts/infoFilter/InfoFilter'
import { Items } from './Items'

export const EggCatch = () => {
  const [gameRunning, setGameRunning] = useState(false)
  const startRef = useRef(0)

  const setStartTime = () => {
    startRef.current = Date.now()
  }
  const toggleRunning = () => {
    setGameRunning(!gameRunning)
  }
  const setset = () => {
    setStartTime()
    toggleRunning()
  }

  return (
    <div>
      <GameContainer>
        <Items gameRunning={gameRunning} />
        {gameRunning || (
          <InfoFilter
            toggleRunning={setset}
            startTime={startRef.current}
            gameStartInfo={'おちてくるたまごをキャッチしよう！'}
          />
        )}
      </GameContainer>
      <TimeGage
        gameRunning={gameRunning}
        toggleRunning={toggleRunning}
        startTime={startRef.current}
      />
    </div>
  )
}
