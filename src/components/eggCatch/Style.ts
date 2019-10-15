import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const fluffy = keyframes`
  0% { transform:translateY(0) }
  10% { transform:translateY(0) }
  20% { transform:translateY(-10%) }
  25% { transform:translateY(0) }
  30% { transform:translateY(-10%) }
  50% { transform:translateY(0) }
  100% { transform:translateY(0) }
`
const dropEgg = keyframes`
  0% { transform:translateY(0%) }
  30% { transform:translateY(500%) }
  90% { transform:translateY(400%) }
  100% { transform:translateY(500%) }
`
const swing = keyframes`
  0% { transform: rotate(0deg); } 
  20% { transform: rotate(10deg); } 
  40% { transform: rotate(-5deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-5deg); } 
  100% { transform: rotate(0deg); } 
`

const animation1 = () =>
  css`
    ${fluffy} 2s ease infinite;
  `

export const Charactor = styled.img.attrs((props: any) => ({
  style: {
    left: props.hiyokoStatus.left + '%',
    transform: `scaleX(${props.hiyokoStatus.direction})`,
  },
}))<any>`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  animation: ${(props) => (props.hiyokoStatus.active ? '' : animation1)},
  transform-origin: bottom center;
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
const animation2 = () =>
  css`
    ${swing} 1s ease 2;
  `
export const DroppingEgg = styled.img`
  position: absolute;
  transform-origin: top center;
  animation: ${animation2};
  // animation: ${dropEgg} 2s ease both infinite;
`
