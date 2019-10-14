import React, { useState, useEffect, useRef } from 'react'
import { DroppingEgg } from './Style'

import rawEgg from '../../static/icon/egg.png'
import droppingEgg from '../../static/icon/egg_0.png'
import brokenEgg from '../../static/icon/broken_egg_2.png'

export const DropEggs = ({ gameRunning }: { gameRunning: boolean }) => {
  const intervalRef = useRef()
  const [eggStatus, setEggStatus] = useState([{ top: 0, left: 50, dropped: false }])
  // const eggLeft = Math.floor(Math.random() * 85)

  const intervalProcessing = () => {
    if (gameRunning && eggStatus[0].top < 70) {
      const newEggTop = { ...eggStatus[0], top: eggStatus[0].top + 1 }
      setEggStatus([newEggTop])
    }
  }

  useEffect(() => {
    const flowBlock: any = setInterval(intervalProcessing, 10)
    intervalRef.current = flowBlock
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [intervalProcessing])

  return (
    <div>
      <DroppingEgg
        alt='droppingEgg'
        src={eggStatus[0].dropped ? rawEgg : eggStatus[0].top < 70 ? droppingEgg : brokenEgg}
        style={
          eggStatus[0].dropped
            ? { top: '70%', left: eggStatus[0].left + '%', width: '15%', height: 'auto' }
            : eggStatus[0].top < 70
            ? {
                top: eggStatus[0].top + '%',
                left: eggStatus[0].left + '%',
                width: '15%',
                height: '13%',
              }
            : {
                top: eggStatus[0].top + '%',
                left: eggStatus[0].left + '%',
                width: '20%',
                height: 'auto',
              }
        }
      />
    </div>
  )
}
