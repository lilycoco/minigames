import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { EggCatch } from './eggCatch/Game'

const App = () => (
  <Layout>
    <BrowserRouter>
      <Route exact path='/' component={EggCatch} />
    </BrowserRouter>
  </Layout>
)

export default App
