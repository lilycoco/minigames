import React from 'react'
import { Header } from './Header'
import { GameContainer, Body } from './Style'
import { TimeGage } from '../timer/TimeGage'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Body>
    <Header />
    <GameContainer>{children}</GameContainer>
    <TimeGage />
  </Body>
)
