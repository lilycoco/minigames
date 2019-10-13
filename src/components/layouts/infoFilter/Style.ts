import styled from 'styled-components'
import media from 'styled-media-query'

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
  font-size: 7vw;
  ${media.greaterThan('medium')`
    font-size: 4vw;
`}
`
