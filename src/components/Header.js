import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <p className="text-center mt-4 mb-4 myfont">
          カップラーメンタイマー
          <img
            src="../static/icons/stopwatch.png"
            alt="../static/icons/stopwatch.png"
            style={{
              width: '30px',
              height: '30px',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </p>
      </div>
    );
  }
}

export default Header;
