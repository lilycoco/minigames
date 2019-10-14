import React, { useState, useEffect, useRef } from 'react'
import { GageBorder, GageLine, Gif } from './Style'
import gakki1 from '../../../static/gif/gakki_1.gif'
import gakki2 from '../../../static/gif/gakki_2.gif'
import gakki3 from '../../../static/gif/gakki_3.gif'
import gakki4 from '../../../static/gif/gakki_4.gif'
import gakki5 from '../../../static/gif/gakki_5.gif'

export const TimeGage = ({
  gameRunning,
  toggleRunning,
}: {
  gameRunning: boolean
  toggleRunning: () => void
}) => {
  const [duration, setDuration] = useState(0)
  const renderRef: any = useRef()

  const addGif = () => {
    if (duration > 0 && duration < 5) {
      return <Gif src={gakki1} alt='gakki' style={{ left: '0' }} />
    } else if (duration > 30 && duration < 35) {
      return <Gif src={gakki2} alt='gakki' style={{ left: '20%' }} />
    } else if (duration > 50 && duration < 55) {
      return <Gif src={gakki3} alt='gakki' style={{ left: '30%' }} />
    } else if (duration > 80 && duration < 85) {
      return <Gif src={gakki4} alt='gakki' style={{ left: '60%' }} />
    } else if (duration > 95 && duration < 100) {
      return <Gif src={gakki5} alt='gakki' style={{ left: '70%' }} />
    }
  }

  const startTime = Date.now()

  const render = () => {
    renderRef.current = requestAnimationFrame(render)
    const currentTime = Date.now()
    setDuration((p) => (p < 100 ? (((currentTime - startTime) / 1000) * 5) / 9 : 100))

    // if (gameRunning) {
    //   if (duration < 100) {
    //     setDuration((p) => (p < 100 ? (((currentTime - startTime) / 1000) * 5) / 9 : 100))
    //     console.log(duration, '🙂')
    //   } else if (duration === 100) {
    //     toggleRunning()
    //     console.log('🌠')
    //     cancelAnimationFrame(renderRef.current)
    //   }
    // }
  }

  useEffect(() => {
    console.log(duration, toggleRunning, '🙂')

    if (gameRunning && duration < 100) {
      renderRef.current = requestAnimationFrame(render)
    }
    return () => {
      cancelAnimationFrame(renderRef.current)
    }
  }, [gameRunning])

  return (
    <div style={{ padding: '10px 15px 100px', margin: '20px 0 0' }}>
      <GageBorder>
        <GageLine style={{ width: duration + '%' }} />
        {addGif()}
      </GageBorder>
    </div>
  )
}
