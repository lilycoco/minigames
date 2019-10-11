import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './Header'
import { HiyokoGame } from './hiyoko/Game'
import { TimeGage } from './timer/TimeGage'
import background from '../static/img/background.png'

const App = () => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      fontFamily: 'Nico Moji',
    }}
  >
    <BrowserRouter>
      <Header />
      <Route exact path='/hiyoko' component={HiyokoGame} />
      {/* <Route path="/surveys/new" component={SurveyNew} /> */}
      <TimeGage />
    </BrowserRouter>
  </div>
)

export default App
