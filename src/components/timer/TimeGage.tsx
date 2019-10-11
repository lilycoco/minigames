import React from 'react'
import gakki from '../../static/gif/gakki_5.gif'

export const TimeGage = () => (
  <div style={{ padding: '15px 25px 100px', margin: '20px 0 0' }}>
    <div
      style={{
        width: '100%',
        height: '20px',
        backgroundColor: 'white',
        border: 'solid 4px #7f1b00',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '500px',
        margin: 'auto',
      }}
    >
      <div
        style={{
          width: '80%',
          height: '12px',
          backgroundColor: '#f39700',
          borderRadius: '10px',
        }}
      />
      <img src={gakki} alt='gakki' style={{ width: '30%', position: 'absolute', right: '30px' }} />
    </div>
  </div>
)
