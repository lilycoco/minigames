import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Invader from './invader/Game'
import TimeGage from './timer/TimeGage'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          {/* <Route exact path='/' component={InvaderGame} /> */}
          <Route exact path='/invader' component={Invader} />
          {/* <Route path="/surveys/new" component={SurveyNew} /> */}
          <TimeGage />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
