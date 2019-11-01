import React, { useState, useEffect } from 'react'
import { GageBorder, GageLine, Gif, Timer } from './Style'
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

  const gifTiming = [
    { from: 0, till: 5, left: 0, src: gakki1 },
    { from: 20, till: 23, left: 20, src: gakki2 },
    { from: 45, till: 48, left: 30, src: gakki3 },
    { from: 70, till: 73, left: 60, src: gakki4 },
    { from: 90, till: 93, left: 70, src: gakki5 },
  ]
  const timerTiming = [
    { from: 33, till: 36, message: 'あと2ふん!' },
    { from: 66, till: 69, message: 'あと1ぷん!' },
    { from: 95, till: 98, message: 'もうちょっと!' },
  ]
  const addGif = () =>
    gifTiming.map((p) => {
      if (duration > p.from && duration < p.till) {
        return <Gif src={p.src} key={p.left} alt='gakki' style={{ left: p.left + '%' }} />
      }
    })

  const addTimer = () =>
    timerTiming.map((p) => {
      if (duration > p.from && duration < p.till) {
        return <Timer key={p.message}>{p.message}</Timer>
      }
    })

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
        {addTimer()}
      </GageBorder>
    </div>
  )
}
