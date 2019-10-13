import React, { useState, useEffect } from 'react'
import { Charactor, RawEgg, DroppingEgg, BrokenEgg } from './Style'
import hiyoko from '../../static/icon/hiyoko.png'
import rawEgg from '../../static/icon/egg.png'
import droppingEgg from '../../static/icon/egg_0.png'
import brokenEgg from '../../static/icon/broken_egg_2.png'

export const Items = () => {
  const [hiyokoPosition, setHiyokoPosition] = useState(0)
  const [hiyokoDirection, setHiyokoDirection] = useState(1)
  const [hiyokoActive, setHiyokoActive] = useState(false)

  const downHandler = ({ key }: KeyboardEvent) => {
    setHiyokoActive(true)
    switch (key) {
      case 'ArrowRight':
        setHiyokoPosition((p: number) => (p < 75 ? p + 1 : p))
        setHiyokoDirection(-1)
        break
      case 'ArrowLeft':
        setHiyokoPosition((p: number) => (p > 0 ? p - 1 : p))
        setHiyokoDirection(1)
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
      <RawEgg src={rawEgg} alt='rawEgg' />
      <DroppingEgg src={droppingEgg} alt='droppingEgg' />
      <BrokenEgg src={brokenEgg} alt='brokenEgg' />
      <Charactor
        src={hiyoko}
        alt='hiyoko'
        style={{
          left: hiyokoPosition + '%',
          transform: 'scaleX(' + hiyokoDirection + ')',
        }}
        hiyokoActive={hiyokoActive}
      />
    </div>
  )
}
