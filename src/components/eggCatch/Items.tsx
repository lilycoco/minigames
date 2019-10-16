import React, { useState, useEffect } from 'react'
import { Charactor } from './Style'
import { DropEggs } from './DropEggs'
import hiyoko from '../../static/icon/hiyoko.png'

export const Items = ({ gameRunning }: { gameRunning: boolean }) => {
  const [hiyokoStatus, setHiyokoStatus] = useState({ left: 0, direction: 1, active: false })

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
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return (
    <div>
      <DropEggs gameRunning={gameRunning} />
      <Charactor src={hiyoko} alt='hiyoko' hiyokoStatus={hiyokoStatus} />
    </div>
  )
}
