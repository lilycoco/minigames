import styled from 'styled-components'
import gameBackground from '../../static/img/sky_2.png'
import bodyBackground from '../../static/img/background.png'
import media from 'styled-media-query'

export const HeaderWrapper = styled.div`
  max-height: 150px;
`
export const LogoWrapper = styled.div`
  max-width: 300px;
  margin: 3% auto;
  ${media.greaterThan('medium')`
    margin: 1% auto;
  `}
`
export const TopIcon = styled.img`
  display: block;
  width: 20%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    width: 25%;
  `}
`
export const HeaderTitle = styled.p`
  font-size: 4.6vw;
  margin: 0;
  color: #7f1b00;
  text-align: center !important;
  ${media.greaterThan('medium')`
    font-size: 2.8vw;
  `}
  ${media.greaterThan('large')`
    font-size: 2vw;
  `}
`
export const GameContainer = styled.div`
  width: calc(100vw - 30px);
  height: calc(100vw - 30px);
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  position: relative;
  background-image: url(${gameBackground});
  background-size: cover;
  box-shadow: 0 0 8px gray;
`
export const Body = styled.div`
  background-image: url(${bodyBackground});
  background-repeat: repeat;
  background-size: contain;
  font-family: 'Nico Moji';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
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
