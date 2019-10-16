import React, { useState, useRef } from 'react'
import { GameContainer } from '../layouts/Style'
import { TimeGage } from '../layouts/timer/TimeGage'
import { InfoFilter } from '../layouts/infoFilter/InfoFilter'
import { Items } from './Items'
import { Point } from './Style'
// import startSound from '../../static/sound/hoisl.mp3'

export const EggCatch = () => {
  const [gameRunning, setGameRunning] = useState(false)
  const [point, setPoint] = useState(0)
  const startRef = useRef(0)

  const setStartTime = () => (startRef.current = Date.now())
  const toggleRunning = () => setGameRunning(!gameRunning)
  const addOrReducePoint = (point: number) => setPoint((p) => p + point)

  // const playSound = () => {
  // const audioElem = new Audio()
  // audioElem.src = startSound
  // audioElem.play()
  // }

  const startGame = () => {
    setStartTime()
    toggleRunning()
    // playSound()
  }

  return (
    <div>
      <GameContainer>
        <Items
          gameRunning={gameRunning}
          startTime={startRef.current}
          addOrReducePoint={(point: number) => addOrReducePoint(point)}
        />
        <Point>
          {point}
          <span style={{ fontSize: '50%' }}>てん</span>
        </Point>
        {gameRunning || (
          <InfoFilter
            startGame={startGame}
            startTime={startRef.current}
            gameStartInfo={'おちてくるたまごをキャッチしよう！'}
            point={point}
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
