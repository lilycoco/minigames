import React, { useState, useEffect, useMemo } from 'react'
import { DroppingEgg, DropedEgg, HIYOKO_SIZE, EGG_SIZE, MAX_TOP, HIYOKO_HEIGHT } from './Style'

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

  const judgeEggCatched = (top: number, left: number) =>
    !!(
      top >= MAX_TOP - HIYOKO_HEIGHT &&
      top < MAX_TOP &&
      (hiyokoLeft - EGG_SIZE < left && hiyokoLeft + HIYOKO_SIZE > left)
    )

  useEffect(() => {
    if (gameRunning) {
      const dropEggs = () => {
        const currentEggStatus = eggStatus.slice()
        eggStatus.forEach((egg, index) => {
          const { top, left, dropped } = egg
          if (dropped) return
          if (top < MAX_TOP) {
            currentEggStatus[index].top = top + 1
            if (judgeEggCatched(top, left)) {
              currentEggStatus[index].dropped = true
              currentEggStatus[index].catched = true
              addOrReducePoint(1)
            }
          } else {
            currentEggStatus[index].dropped = true
            addOrReducePoint(-1)
          }
        })
        if (duration % 30 === 1) {
          currentEggStatus.push(initialEggState)
        }
        setEggStatus(currentEggStatus)
      }
      requestAnimationFrame(() => {
        dropEggs()
        setDuration(() => Date.now() - startTime)
      })
    }
  }, [gameRunning, duration])

  const droppingEggs = eggStatus
    .filter((x) => !x.dropped)
    .map((egg, index) => <DroppingEgg alt='droppingEgg' key={index} eggStatus={egg} />)

  const droppedEggs = useMemo(
    () =>
      eggStatus
        .filter((x) => x.dropped && !x.catched)
        .map((egg, index) => <DropedEgg alt='droppingEgg' key={index} eggStatus={egg} />),
    [eggStatus.filter((x) => x.dropped && !x.catched).length],
  )

  return (
    <div>
      {droppingEggs}
      {droppedEggs}
    </div>
  )
}
