import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'

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
export const InfoFlame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  text-align: center;
  width: 80%;
`
export const StartButton = styled.button`
  background: #f39700;
  color: #fff;
  border-bottom: solid 1vw #627295;
  border-radius: 1.5vw;
  width: 30vw;
  height: 13vw;
  font-size: 5.5vw;
  margin-bottom: 3vw;
  box-shadow: 0 0 5px gray;
  ${media.greaterThan('medium')`
    width: 18vw;
    height: 8vw;
    font-size: 3vw;
    margin-bottom: 2vw;
    box-shadow: 0 0 10px gray;
`}
  ${media.greaterThan('large')`
    border-bottom: solid 0.5vw #627295;
    border-radius: 1vw;
    width: 12vw;
    height: 6vw;
    font-size: 2.5vw;
    margin-bottom: 2vw;
`}
`
export const Info = styled.p`
  color: #7f1b00;
  font-size: 7vw;
  ${media.greaterThan('medium')`
    font-size: 4vw;
`}
`
