import styled from 'styled-components'
import background from '../static/img/sky_2.png'

export const TopIcon = styled.img`
  display: block;
  width: 10vw;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`

export const GameContainer = styled.div`
  width: calc(100vw - 30px);
  height: calc(100vw - 30px);
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  box-shadow: 0 0 8px gray;
`
