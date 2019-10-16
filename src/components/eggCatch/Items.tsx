import React, { useState, useEffect } from 'react'
import { MovingCharactor } from './Style'
import hiyoko from '../../static/icon/hiyoko.png'
import { DropEggs } from './DropEggs'

const PAGE_SIZE = 420
const GAME_PAGE_SIZE = 75

export const Items = ({
  gameRunning,
  startTime,
  addOrReducePoint,
}: {
  gameRunning: boolean
  startTime: number
  addOrReducePoint: (point: number) => void
}) => {
  const [hiyokoStatus, setHiyokoStatus] = useState({ left: 0, direction: 1, active: false })
  const [startPageX, setStartPageX] = useState(0)

  const touchHandle = (e: TouchEvent) => {
    e.preventDefault()
    setHiyokoStatus((p) => ({ ...p, active: true }))
    const currentPageX = e.changedTouches[0].pageX
    const moveLength = ((currentPageX - startPageX) / PAGE_SIZE) * GAME_PAGE_SIZE

    switch (e.type) {
      case 'touchstart':
        setHiyokoStatus((p) => ({ ...p, active: true }))
        setStartPageX(currentPageX)
        break
      case 'touchmove':
        setHiyokoStatus((p) => ({
          ...p,
          left: p.left + moveLength < 75 && p.left + moveLength > 0 ? p.left + moveLength : p.left,
          direction: moveLength > 0 ? -1 : 1,
        }))
        break
      case 'touchend':
        setHiyokoStatus((p) => ({ ...p, active: false }))
    }
  }

  useEffect(() => {
    window.addEventListener('touchstart', touchHandle, { passive: false })
    // window.addEventListener('touchcancel', touchHandle, {passive: false})
    window.addEventListener('touchmove', touchHandle, { passive: false })
    window.addEventListener('touchend', touchHandle, { passive: false })

    return () => {
      window.removeEventListener('touchstart', touchHandle)
      // window.removeEventListener('touchcancel', touchHandle)
      window.removeEventListener('touchmove', touchHandle)
      window.removeEventListener('touchend', touchHandle)
    }
  }, [startPageX])

  return (
    <div>
      <DropEggs
        gameRunning={gameRunning}
        startTime={startTime}
        addOrReducePoint={(point) => addOrReducePoint(point)}
        hiyokoLeft={hiyokoStatus.left}
      />
      <MovingCharactor src={hiyoko} alt='hiyoko' hiyokoStatus={hiyokoStatus} />
    </div>
  )
}
