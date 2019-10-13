import styled from 'styled-components'
import gameBackground from '../../static/img/sky_2.png'
import bodyBackground from '../../static/img/background.png'

export const GameContainer = styled.div`
  width: calc(100vw - 30px);
  height: calc(100vw - 30px);
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  position: relative;
  background-image: url(${gameBackground});
  background-size: cover;
  box-shadow: 0 0 8px gray;
`
export const Body = styled.div`
  background-image: url(${bodyBackground});
  background-repeat: repeat;
  background-size: contain;
  font-family: 'Nico Moji';
  color: #7f1b00;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`
