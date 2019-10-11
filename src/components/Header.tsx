import React from 'react'
import clock from '../static/icon/clock.png'
import { TopIcon } from './Style'

export const Header = () => (
  <div style={{ backgroundColor: 'clear', padding: '3% 0 1%' }}>
    <TopIcon src={clock} alt='stopwatch'></TopIcon>
    <p
      className='text-center mt-0 mb-2'
      style={{
        fontSize: '150%',
        color: '#7f1b00',
      }}
    >
      カップラーメンタイマー
    </p>
  </div>
)
