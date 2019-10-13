import React, { useState, useEffect } from 'react'
import gakki1 from '../../../static/gif/gakki_1.gif'
import gakki2 from '../../../static/gif/gakki_2.gif'
import gakki3 from '../../../static/gif/gakki_3.gif'
import gakki4 from '../../../static/gif/gakki_4.gif'
import gakki5 from '../../../static/gif/gakki_5.gif'
import { GageBorder, GageLine, Gif } from './Style'

export const TimeGage = ({
  gameRunning,
  toggleRunning,
}: {
  gameRunning: boolean
  toggleRunning: () => void
}) => {
  const [duration, setDuration] = useState(0)
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
  let requestId: any

  const render = () => {
    requestId = requestAnimationFrame(render)
    const currentTime = Date.now()

    if (gameRunning) {
      if (duration < 100) {
        setDuration((p) => (p < 100 ? (((currentTime - startTime) / 1000) * 5) / 9 : 100))
        console.log(duration, '🙂')
      } else if (duration === 100) {
        toggleRunning()
        console.log('🌠')
        cancelAnimationFrame(requestId)
      }
    }
  }

  useEffect(() => {
    if (duration < 100) {
      // requestId = requestAnimationFrame(render)
      // console.log(duration, '🙂')
    }
    return () => {
      cancelAnimationFrame(requestId)
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
