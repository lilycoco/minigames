import React, { useState, useEffect } from 'react'
import { Charactor, Point } from './Style'
import hiyoko from '../../static/icon/hiyoko.png'
import { DropEggs } from './DropEggs'

export const Items = ({ gameRunning }: { gameRunning: boolean }) => {
  const [hiyokoStatus, setHiyokoStatus] = useState({ left: 0, direction: 1, active: false })
  const [point, setPoint] = useState(5)

  const downHandler = ({ key }: KeyboardEvent) => {
    setHiyokoStatus((p) => ({ ...p, active: true }))
    switch (key) {
      case 'ArrowRight':
        setHiyokoStatus((p) => ({ ...p, left: p.left < 75 ? p.left + 1 : p.left, direction: -1 }))
        break
      case 'ArrowLeft':
        setHiyokoStatus((p) => ({ ...p, left: p.left > 0 ? p.left - 1 : p.left, direction: 1 }))
    }
    // setHiyokoActive(false)
  }

  useEffect(() => {
    console.log(setPoint)

    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return (
    <div>
      <DropEggs gameRunning={gameRunning} />
      <Charactor
        src={hiyoko}
        alt='hiyoko'
        // transform: scale(${(p) => (p.key ? p.key : '-1')}, 1)
        // animation: ${fluffy} 2.5s ease infinite;
        // animation: ${dropEgg} 2s ease both infinite;
        hiyokoStatus={hiyokoStatus}
      />
      <Point>
        {point}
        <span style={{ fontSize: '50%' }}>てん</span>
      </Point>
    </div>
  )
}
