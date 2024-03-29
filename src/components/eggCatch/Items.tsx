import React, { useState, useEffect, useCallback } from 'react'
import { MovingCharactor, HIYOKO_WIDTH, GAME_PAGE_RATIO } from './Style'
import { DropEggs } from './DropEggs'
import hiyoko from '../../static/icon/hiyoko.png'

export const Items = ({
  startTime,
  addOrReducePoint,
}: {
  startTime: number
  addOrReducePoint: (point: number) => void
}) => {
  const [hiyokoStatus, setHiyokoStatus] = useState({ left: 0, direction: 1, active: false })
  const [startPageX, setStartPageX] = useState(0)
  const pageWidth = document.documentElement.clientWidth
  const gamePageSize = pageWidth < 530 ? pageWidth - 30 : pageWidth - (pageWidth - 470)

  const touchHandle = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()
      setHiyokoStatus((p) => ({ ...p, active: true }))
      const currentPageX = e.changedTouches[0].pageX
      const moveLength = ((currentPageX - startPageX) / gamePageSize) * GAME_PAGE_RATIO
      switch (e.type) {
        case 'touchstart':
          setStartPageX(currentPageX)
          setHiyokoStatus((p) => ({ ...p, active: true }))
          break
        case 'touchmove':
          setStartPageX(currentPageX)
          setHiyokoStatus((p) => ({
            ...p,
            left:
              p.left + moveLength < GAME_PAGE_RATIO - (HIYOKO_WIDTH + 5) && p.left + moveLength > 0
                ? p.left + moveLength
                : p.left,
            direction: moveLength > 0 ? -1 : 1,
          }))
          break
        case 'touchend':
          setHiyokoStatus((p) => ({ ...p, active: false }))
      }
    },
    [startPageX],
  )

  useEffect(() => {
    window.addEventListener('touchstart', touchHandle, { passive: false })
    window.addEventListener('touchmove', touchHandle, { passive: false })
    window.addEventListener('touchend', touchHandle, { passive: false })
    return () => {
      window.removeEventListener('touchstart', touchHandle)
      window.removeEventListener('touchmove', touchHandle)
      window.removeEventListener('touchend', touchHandle)
    }
  }, [startPageX, touchHandle])

  return (
    <div>
      <DropEggs
        startTime={startTime}
        addOrReducePoint={(point) => addOrReducePoint(point)}
        hiyokoLeft={hiyokoStatus.left}
      />
      <MovingCharactor src={hiyoko} alt='hiyoko' hiyokoStatus={hiyokoStatus} />
    </div>
  )
}
