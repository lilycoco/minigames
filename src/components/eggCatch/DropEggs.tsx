import React, { useState, useEffect, useMemo } from 'react'
import {
  DroppingEgg,
  DropedEgg,
  HIYOKO_WIDTH,
  EGG_WIDTH,
  MAX_TOP,
  HIYOKO_HEIGHT,
  GAME_PAGE_RATIO,
} from './Style'
import rawEgg from '../../static/icon/egg.png'

export const DropEggs = ({
  startTime,
  addOrReducePoint,
  hiyokoLeft,
}: {
  startTime: number
  addOrReducePoint: (point: number) => void
  hiyokoLeft: number
}) => {
  const eggLeft = Math.floor(Math.random() * (GAME_PAGE_RATIO - EGG_WIDTH - 5))
  const eggColor = Math.floor(Math.random() * 4)
  const initialEggState = { top: 0, left: eggLeft, dropped: false, catched: false, color: eggColor }
  const [eggStatus, setEggStatus] = useState([initialEggState])
  const [duration, setDuration] = useState(0)

  const judgeEggCatched = (top: number, left: number) =>
    !!(
      top >= MAX_TOP - HIYOKO_HEIGHT &&
      top < MAX_TOP &&
      (hiyokoLeft - EGG_WIDTH < left && hiyokoLeft + HIYOKO_WIDTH > left)
    )

  useEffect(() => {
    const dropEggs = () => {
      const currentEggStatus = eggStatus.slice()
      eggStatus.forEach((egg, index) => {
        const { top, left, dropped, color } = egg
        if (dropped) return
        if (top >= MAX_TOP) {
          currentEggStatus[index].dropped = true
          addOrReducePoint(-color - 1)
          return
        }
        if (judgeEggCatched(top, left)) {
          currentEggStatus[index].dropped = true
          currentEggStatus[index].catched = true
          addOrReducePoint(color + 1)
        }
        currentEggStatus[index].top = top + 1
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
  }, [duration])

  const droppingEggs = eggStatus
    .filter((x) => !x.dropped)
    .map((egg, index) => <DroppingEgg alt='droppingEgg' key={index} eggStatus={egg} />)

  const droppedEggs = useMemo(
    () =>
      eggStatus
        .filter((x) => x.dropped && !x.catched)
        .map((egg, index) => (
          <DropedEgg alt='droppingEgg' key={index} src={rawEgg} eggStatus={egg} />
        )),
    [eggStatus.filter((x) => x.dropped && !x.catched).length],
  )

  return (
    <div>
      {droppingEggs}
      {droppedEggs}
    </div>
  )
}
