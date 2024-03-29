import React from 'react'
import { Header } from './header/Header'
import { Body } from './Style'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Body>
    <Header />
    {children}
  </Body>
)
