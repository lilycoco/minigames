import React from 'react'
import clock from '../../../static/icon/clock.png'
import { TopIcon, HeaderTitle, HeaderWrapper, LogoWrapper } from './Style'

export const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <TopIcon src={clock} alt='stopwatch'></TopIcon>
      <HeaderTitle>カップラーメンタイマー</HeaderTitle>
    </LogoWrapper>
  </HeaderWrapper>
)
