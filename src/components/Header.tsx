import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <p
          className='text-center mt-4 mb-5'
          style={{ fontFamily: 'Nikukyu', fontSize: '200%', color: 'red' }}
        >
          カップラーメンタイマー
        </p>
      </div>
    )
  }
}

export default Header
