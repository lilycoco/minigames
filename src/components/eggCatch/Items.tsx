import React, { useState, useEffect } from 'react'
import { Charactor, RawEgg, DroppingEgg, BrokenEgg, Point } from './Style'
import hiyoko from '../../static/icon/hiyoko.png'
import rawEgg from '../../static/icon/egg.png'
import droppingEgg from '../../static/icon/egg_0.png'
import brokenEgg from '../../static/icon/broken_egg_2.png'

export const Items = () => {
  const [hiyokoStatus, setHiyokoStatus] = useState({ x: 0, direction: 1, active: false })
  // const [eggStatus, setEggStatus] = useState([{ x: 0, y: 0 }])

  const [point, setPoint] = useState(5)

  const downHandler = ({ key }: KeyboardEvent) => {
    setHiyokoStatus((p) => ({ ...p, active: true }))
    switch (key) {
      case 'ArrowRight':
        setHiyokoStatus((p) => ({ ...p, x: p.x < 75 ? p.x + 1 : p.x, direction: -1 }))
        break
      case 'ArrowLeft':
        setHiyokoStatus((p) => ({ ...p, x: p.x > 0 ? p.x - 1 : p.x, direction: 1 }))
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
      <RawEgg src={rawEgg} alt='rawEgg' />
      <DroppingEgg src={droppingEgg} alt='droppingEgg' />
      <BrokenEgg src={brokenEgg} alt='brokenEgg' />
      <Point>
        {point}
        <span style={{ fontSize: '50%' }}>てん</span>
      </Point>
      <Charactor
        src={hiyoko}
        alt='hiyoko'
        style={{
          left: hiyokoStatus.x + '%',
          transform: 'scaleX(' + hiyokoStatus.direction + ')',
        }}
        hiyokoStatus={hiyokoStatus}
      />
    </div>
  )
}
