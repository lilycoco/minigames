import React, { useState, useEffect } from 'react'
import { Charactor, Egg, Egg2, Egg3 } from './Style'
import { GameContainer } from '../layouts/Style'
import { TimeGage } from '../layouts/timer/TimeGage'
import { InfoFilter } from '../layouts/infoFilter/InfoFilter'
import hiyoko from '../../static/icon/hiyoko.png'
import egg from '../../static/icon/egg.png'
import egg0 from '../../static/icon/egg_0.png'
import egg1 from '../../static/icon/broken_egg_2.png'

export const EggCatch = () => {
  const [hiyokoPosition, setHiyokoPosition] = useState(0)
  const [hiyokoDirection, setHiyokoDirection] = useState(1)
  const [gameRunning, setGameRunning] = useState(false)

  // const [eggHeight, setEggHeight] = useState(1)

  const toggleRunning = () => setGameRunning(!gameRunning)

  const downHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'ArrowRight':
        setHiyokoPosition((p: number) => (p < 70 ? p + 1 : p))
        setHiyokoDirection(-1)
        break
      case 'ArrowLeft':
        setHiyokoPosition((p: number) => (p > 0 ? p - 1 : p))
        setHiyokoDirection(1)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return (
    <div>
      <GameContainer>
        <Egg src={egg} alt='egg' />
        <Egg2 src={egg0} alt='egg0' />
        <Egg3 src={egg1} alt='egg1' />
        <Charactor
          src={hiyoko}
          alt='hiyoko'
          style={{
            left: hiyokoPosition + 'vw',
            transform: 'scaleX(' + hiyokoDirection + ')',
          }}
        />
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
