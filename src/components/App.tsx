import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './Header'
import { HiyokoGame } from './hiyoko/Game'
import { TimeGage } from './timer/TimeGage'
import background from '../static/img/background.png'
import { GameContainer } from './Style'

const App = () => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      fontFamily: 'Nico Moji',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      overflow: 'hidden',
    }}
  >
    <BrowserRouter>
      <Header />
      <GameContainer>
        <Route exact path='/hiyoko' component={HiyokoGame} />
        {/* <Route path="/surveys/new" component={SurveyNew} /> */}
      </GameContainer>
      <TimeGage />
    </BrowserRouter>
  </div>
)

export default App
