import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './Header'
import { InvaderGame } from './invader/Game'
import { TimeGage } from './timer/TimeGage'

const App = () => (
  <div className='container'>
    <BrowserRouter>
      <Header />
      <Route exact path='/invader' component={InvaderGame} />
      {/* <Route path="/surveys/new" component={SurveyNew} /> */}
      <TimeGage />
    </BrowserRouter>
  </div>
)

export default App
