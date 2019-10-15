import React, { useState, useEffect } from 'react'
import { GageBorder, GageLine, Gif } from './Style'
import gakki1 from '../../../static/gif/gakki_1.gif'
import gakki2 from '../../../static/gif/gakki_2.gif'
import gakki3 from '../../../static/gif/gakki_3.gif'
import gakki4 from '../../../static/gif/gakki_4.gif'
import gakki5 from '../../../static/gif/gakki_5.gif'

const MAX_DURATION = 100
const MAX_MILLISEC = 180 * 1000

export const TimeGage = ({
  gameRunning,
  toggleRunning,
  startTime,
}: {
  gameRunning: boolean
  toggleRunning: () => void
  startTime: number
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

  useEffect(() => {
    if (gameRunning) {
      if (duration < MAX_DURATION) {
        requestAnimationFrame(() =>
          setDuration(() =>
            Math.min(((Date.now() - startTime) / MAX_MILLISEC) * MAX_DURATION, MAX_DURATION),
          ),
        )
      } else if (duration === MAX_DURATION) {
        toggleRunning()
      }
    }
  }, [gameRunning, duration])

  return (
    <div style={{ padding: '10px 15px 100px', margin: '20px 0 0' }}>
      <GageBorder>
        <GageLine style={{ width: duration + '%' }} />
        {addGif()}
      </GageBorder>
    </div>
  )
}
