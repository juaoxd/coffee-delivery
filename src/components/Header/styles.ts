import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    color: ${props => props.theme['purple-dark']};
    background-color: ${props => props.theme["purple-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
`