import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { HiyokoConfig, EggConfig } from '../../models/EggCatch'
import rawEgg from '../../static/icon/egg.png'
import droppingEgg from '../../static/icon/egg_0.png'
import brokenEgg from '../../static/icon/broken_egg_2.png'

const jump = keyframes`
  0% { transform:translateY(0) }
  10% { transform:translateY(0) }
  20% { transform:translateY(-10%) }
  25% { transform:translateY(0) }
  30% { transform:translateY(-10%) }
  50% { transform:translateY(0) }
  100% { transform:translateY(0) }
`
const animation1 = () =>
  css`
    ${jump} 2s ease infinite;
  `
const drop = keyframes`
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
const animation2 = () =>
  css`
    ${swing} 1s ease 2;
  `
export const Charactor = styled.img.attrs(({ hiyokoStatus }: { hiyokoStatus: HiyokoConfig }) => ({
  style: {
    left: hiyokoStatus.left + '%',
    transform: `scaleX(${hiyokoStatus.direction})`,
  },
}))`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 4%;
  animation: ${({ hiyokoStatus }: { hiyokoStatus: HiyokoConfig }) =>
    hiyokoStatus.active ? '' : animation1},
  transform-origin: bottom center;
`
export const DroppingEgg = styled.img.attrs(({ eggStatus }: { eggStatus: EggConfig }) => ({
  style: {
    top: eggStatus.top + '%',
    left: eggStatus.left + '%',
    width: eggStatus.dropped ? '15%' : eggStatus.top < 70 ? '15%' : '20%',
    height: eggStatus.dropped ? 'auto' : eggStatus.top < 70 ? '13%' : 'auto',
  },
  src: eggStatus.dropped ? rawEgg : eggStatus.top < 70 ? droppingEgg : brokenEgg,
}))<any>`
  position: absolute;
  transform-origin: top center;
  animation: ${animation2};
  // animation: ${drop} 2s ease both infinite;
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
