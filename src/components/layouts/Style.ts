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
