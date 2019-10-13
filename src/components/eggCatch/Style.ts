import styled, { css, keyframes } from 'styled-components'
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
  0% { transform:translateY(0%) }
  30% { transform:translateY(500%) }
  90% { transform:translateY(400%) }
  100% { transform:translateY(500%) }
}`
const swing = keyframes`{
  0% { transform: rotate(0deg); } 
  20% { transform: rotate(10deg); } 
  40% { transform: rotate(-5deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-5deg); } 
  100% { transform: rotate(0deg); } 
}`

export const Charactor = styled.img<{ hiyokoStatus: any }>`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  transform-origin: bottom center;
  animation: ${({ hiyokoStatus }) =>
    hiyokoStatus.active
      ? ''
      : css`
          ${fluffy} 2s ease infinite none;
        `} ;
  // transform: scale(${(p) => (p.key ? p.key : '-1')}, 1)
  // animation: ${fluffy} 2.5s ease infinite;
`
export const DroppingEgg = styled.img`
  width: 15%;
  height: 13%;
  position: absolute;
  top: 0;
  right: 20%;
  transform-origin: top center;
  animation: ${swing} 1s ease infinite;
  // animation: ${dropEgg} 2s ease both infinite;
`
export const RawEgg = styled.img`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 3%;
  left: 30%;
`
export const BrokenEgg = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 4%;
  right: 5%;
`
export const Point = styled.div`
  font-size: 10vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 5%;
  ${media.greaterThan('medium')`
  font-size: 6vw;
`}
  ${media.greaterThan('large')`
  font-size: 5vw;
`}
`
