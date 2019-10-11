import styled, { keyframes } from 'styled-components'
import background from '../static/img/sky_2.png'

const fluffy = keyframes`{
  0% { transform:translateY(0) }
  10% { transform:translateY(0) }
  20% { transform:translateY(-10%) }
  25% { transform:translateY(0) }
  30% { transform:translateY(-10%) }
  50% { transform:translateY(0) }
  100% { transform:translateY(0) }
}`

// const dropEgg = keyframes`{
//   0% { transform:translateY(0) }
//   70% { transform:translateY(400%) }
//   90% { transform:translateY(300%) }
//   100% { transform:translateY(400%) }
// }`
const swing = keyframes`{
  20% { transform: rotate(15deg); } 
  40% { transform: rotate(-10deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-5deg); } 
  100% { transform: rotate(0deg); } 
}`

export const Charactor = styled.img`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  left: 4%;
  transform: scale(-1, 1); //画像反転
  animation: ${fluffy} 2.5s ease infinite;
`
export const Egg2 = styled.img`
  width: 18%;
  height: 15%;
  position: absolute;
  bottom: 5%;
  right: 20%;
  transform-origin: bottom center;
  animation: ${swing} 1s ease both infinite;
`
export const TopIcon = styled.img`
  display: block;
  width: 10%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`
export const Egg = styled.img`
  width: 17%;
  height: auto;
  position: absolute;
  bottom: 3%;
  left: 30%;
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
  box-shadow: 0 0 8px gray;
`
