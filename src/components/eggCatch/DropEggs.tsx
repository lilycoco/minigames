import React, { useState, useEffect, useMemo } from 'react'
import { DroppingEgg } from './Style'

const HIYOKO_SIZE = 15
const EGG_SIZE = 10

export const DropEggs = ({
  gameRunning,
  startTime,
  addOrReducePoint,
  hiyokoLeft,
}: {
  gameRunning: boolean
  startTime: number
  addOrReducePoint: (point: number) => void
  hiyokoLeft: number
}) => {
  const eggLeft = Math.floor(Math.random() * 85)
  const initialEggState = { top: 0, left: eggLeft, dropped: false, catched: false }
  const [eggStatus, setEggStatus] = useState([initialEggState])
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (gameRunning) {
      const test = () => {
        const currentEggStatus = eggStatus.slice()
        eggStatus.map((egg, index) => {
          const { top, left, dropped } = egg
          if (!dropped) {
            if (top < 60) {
              currentEggStatus.splice(index, 1, { ...egg, top: top + 1 })
            } else if (top >= 60 && top < 82) {
              if (hiyokoLeft - EGG_SIZE < left && hiyokoLeft + HIYOKO_SIZE > left) {
                currentEggStatus.splice(index, 1, { ...egg, dropped: true, catched: true })
                addOrReducePoint(1)
              } else {
                currentEggStatus.splice(index, 1, { ...egg, top: top + 1 })
              }
            } else {
              currentEggStatus.splice(index, 1, { ...egg, dropped: true })
              addOrReducePoint(-1)
            }
          }
        })
        if (duration % 30 === 1) {
          currentEggStatus.push(initialEggState)
        }
        setEggStatus(currentEggStatus)
      }

      requestAnimationFrame(() => {
        test()
        setDuration(() => Date.now() - startTime)
      })
    }
  }, [gameRunning, duration])

  const droppingEggs = eggStatus.slice().filter((x) => !x.dropped)
  const droppedEggs = useMemo(() => {
    return eggStatus
      .filter((x) => x.dropped && !x.catched)
      .map((egg, index) => (
        <DroppingEgg alt='droppingEgg' key={`dropped${index}`} eggStatus={egg} />
      ))
  }, [eggStatus.filter((x) => x.dropped && !x.catched).length])

  return (
    <div>
      {droppingEggs.map((egg, index) => (
        <DroppingEgg alt='droppingEgg' key={index} eggStatus={egg} />
      ))}
      {droppedEggs}
    </div>
  )
}
