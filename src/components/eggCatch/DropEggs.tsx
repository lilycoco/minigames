import React, { useState, useEffect } from 'react'
import { DroppingEgg } from './Style'

export const DropEggs = ({
  gameRunning,
  startTime,
}: {
  gameRunning: boolean
  startTime: number
}) => {
  const eggLeft = Math.floor(Math.random() * 85)
  const initialEggState = [{ top: 0, left: eggLeft, dropped: false }]
  const [eggStatus, setEggStatus] = useState(initialEggState)

  useEffect(() => {
    if (gameRunning) {
      const currentEggStatus = eggStatus.slice()
      const timeStemps = Date.now() - startTime
      if (timeStemps % 10 === 0) {
        setEggStatus(currentEggStatus.concat(initialEggState))
      }
      eggStatus.map((egg, index) => {
        if (!egg.dropped) {
          console.log(startTime, '😉')
          if (egg.top < 82) {
            currentEggStatus.splice(index, 1, { ...egg, top: egg.top + 1 })
          } else {
            currentEggStatus.splice(index, 1, { ...egg, dropped: true })
          }
        }
      })
      requestAnimationFrame(() => setEggStatus(currentEggStatus))
    }
  }, [gameRunning, eggStatus])

  return (
    <div>
      {eggStatus.map((egg, index) => (
        <DroppingEgg alt='droppingEgg' key={index} eggStatus={egg} />
      ))}
    </div>
  )
}
