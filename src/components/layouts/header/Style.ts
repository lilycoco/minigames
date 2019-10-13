import styled from 'styled-components'
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
  text-align: center !important;
  ${media.greaterThan('medium')`
    font-size: 2.8vw;
  `}
  ${media.greaterThan('large')`
    font-size: 2vw;
  `}
`
