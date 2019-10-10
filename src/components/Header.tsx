import React from 'react'
import clock from '../static/icon/clock.png'
import { TopIcon } from './Style'

export const Header = () => (
  <div style={{ backgroundColor: 'clear' }}>
    <p
      className='text-center mt-0 mb-2'
      style={{
        fontFamily: 'Nico Moji',
        fontSize: '200%',
        color: '#7f1b00',
        padding: '20px 0 10px',
      }}
    >
      <TopIcon src={clock} alt='stopwatch'></TopIcon>
      カップラーメンタイマー
    </p>
  </div>
)
