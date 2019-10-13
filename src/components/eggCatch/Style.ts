import styled, { keyframes } from 'styled-components'

const fluffy = keyframes`{
  0% { transform:translateY(0) }
  10% { transform:translateY(0) }
  20% { transform:translateY(-10%) }
  25% { transform:translateY(0) }
  30% { transform:translateY(-10%) }
  50% { transform:translateY(0) }
  100% { transform:translateY(0) }
}`

const dropEgg = keyframes`{
  0% { transform:translateY(-500%) }
  30% { transform:translateY(0%) }
  90% { transform:translateY(-100%) }
  100% { transform:translateY(0%) }
}`
const swing = keyframes`{
  20% { transform: rotate(10deg); } 
  40% { transform: rotate(-5deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-5deg); } 
  100% { transform: rotate(0deg); } 
}`

export const Charactor = styled.img`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  // transform: scale(${(p) => (p.key ? p.key : '-1')}, 1)
  // transform-origin: bottom center;
  // animation: ${swing} 1s ease both infinite;
  // animation: ${fluffy} 2.5s ease infinite;
`
export const Egg2 = styled.img`
  width: 15%;
  height: 13%;
  position: absolute;
  bottom: 5%;
  right: 20%;
  transform-origin: bottom center;
  // animation: ${swing} 1s ease both infinite;
  animation: ${dropEgg} 2s ease both infinite;
`
export const Egg = styled.img`
  width: 15%;
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