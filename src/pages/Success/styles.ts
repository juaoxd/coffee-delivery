import styled from "styled-components";

export const SuccessContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const SuccessMessage = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;

  h1 {
    color: ${props => props.theme["yellow-dark"]};
    font-size: 2rem;
    font-weight: bolder;
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`

export const SuccessContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.375rem;
`

export const OrderInfo = styled.div`
  background: linear-gradient(${props => props.theme.background}, ${props => props.theme.background}) padding-box, linear-gradient(to right, ${props => props.theme.yellow}, ${props => props.theme.purple}) border-box;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border: 1px solid transparent;
  width: 526px;
  height: 270px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface OrderInfoItemProps {
  iconBackgroundColor?: 'purple' | 'yellow' | 'yellow-dark' | null
} 

export const OrderInfoItem = styled.div<OrderInfoItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  svg {
    display: flex;
    color: ${props => props.theme.white};
    background-color: ${props => props.iconBackgroundColor ? props.theme[props.iconBackgroundColor] : props.theme.purple };
    padding: 0.5rem;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`