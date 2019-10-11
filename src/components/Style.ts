import styled from 'styled-components'
import background from '../static/img/sky_2.png'

export const TopIcon = styled.img`
  display: block;
  width: 10%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`
export const Charactor = styled.img`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  left: 4%;
`
export const Egg = styled.img`
  width: 17%;
  height: auto;
  position: absolute;
  bottom: 3%;
  left: 30%;
`
export const Egg2 = styled.img`
  width: 18%;
  height: 15%;
  position: absolute;
  top: 10%;
  right: 10%;
`
export const Egg3 = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 4%;
  right: 5%;
`
export const GameContainer = styled.div`
  width: calc(100vmin - 30px);
  height: calc(100vmin - 30px);
  max-width: 500px;
  max-height:500px
  margin: auto;
  position: relative;
  background-image: url(${background});
  background-size: cover;
`
