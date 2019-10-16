import React, { useState, useEffect, useRef } from 'react'
import { DroppingEgg } from './Style'

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
      console.log('😆')
    }
  }, [intervalProcessing])

  return (
    <div>
      <DroppingEgg alt='droppingEgg' eggStatus={eggStatus[0]} />
    </div>
  )
}
