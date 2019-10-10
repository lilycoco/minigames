import React from 'react'
import stopwatch from '../static/icon/stopwatch.png'
import { TopIcon } from './Style'

export const Header = () => (
  <div style={{ backgroundColor: 'white' }}>
    <TopIcon src={stopwatch} alt='stopwatch'></TopIcon>
    <p
      className='text-center mt-1 mb-3'
      style={{ fontFamily: 'Nico Moji', fontSize: '200%', color: 'red' }}
    >
      カップラーメンタイマー
    </p>
  </div>
)
