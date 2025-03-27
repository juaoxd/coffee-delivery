import styled from 'styled-components'
import homeBackground from '../../assets/home-background.svg'

export const HeroSection = styled.section`
  background: url(${homeBackground});
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.5rem;
  height: calc(100vh - 215px);
  padding: 5.75rem 10rem;
  margin: 0 auto;

  width: 100%;
  max-width: 1120px;

  aside {
    max-width: 588px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: bolder;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
  }
`

 
const LOGO_BACKGROUND_COLORS = {
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
  darkYellow: 'yellow-dark',
} as const

interface ListItemProps {
  logoBackgroundColor: keyof typeof LOGO_BACKGROUND_COLORS
}

export const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
`

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 1rem;
  line-height: 1.3;

  min-width: 300px;

  span {
    display: flex;
    background-color: ${props => props.theme[LOGO_BACKGROUND_COLORS[props.logoBackgroundColor]]};
    color: ${props => props.theme.white};
    padding: 0.5rem;
    border-radius: 50%;
    line-height: normal;
  }
`

export const CoffeeSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: auto;

  h1 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bolder;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
  margin: 54px auto;
  width: 100%;
  max-width: 1120px;
`