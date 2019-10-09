import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Invader from './Invader/Game'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route exact path='/' component={InvaderGame} /> */}
            <Route exact path='/invader' component={Invader} />
            {/* <Route path="/surveys/new" component={SurveyNew} /> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
