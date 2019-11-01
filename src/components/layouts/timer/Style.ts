import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

export const GageBorder = styled.div`
  width: 100%;
  background-color: white;
  border: solid 4px #7f1b00;
  border-radius: 10px;
  position: relative;
  max-width: 500px;
  margin: auto;
  box-shadow: 0 0 5px gray;
`
export const GageLine = styled.div`
  height: 12px;
  background-color: #f39700;
  border-radius: 10px;
`
export const Gif = styled.img`
  width: 30%;
  position: absolute;
`
const flash = keyframes`
  0% { opacity:1 }
  50% { opacity:0 }
  100% { opacity:1 }
`
const animation1 = () =>
  css`
    ${flash} 2s 1s linear infinite;
  `
export const Timer = styled.div`
  position: absolute;
  text-align: center;
  top: 300%;
  left: 75%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  font-size: 10vw;
  color: red;
  white-space: nowrap;
  animation: ${animation1};
  ${media.greaterThan('medium')`
    font-size: 3vw;
`}
  ${media.greaterThan('large')`
    font-size: 6vw;
`}
`
export const MinuteLine = styled.div`
  width: 5px;
  background-color: #7f1b00;
  height: 12px;
  margin: 0;
  position: absolute;
  top: 0;
`
