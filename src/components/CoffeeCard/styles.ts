import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 310px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -60px;
  }
`

export const CardTag = styled.span `
  color: ${props => props.theme["yellow-dark"]};
  background-color: ${props => props.theme["yellow-light"]};
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const CardTitle = styled.h3`
  color: ${props => props.theme["base-subtitle"]};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: bold;
`

export const CardDescription = styled.p`
  color: ${props => props.theme["base-label"]};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 1.3;
  text-align: center;
  margin: 0.5rem 1.25rem 2rem 1.25rem;
`

export const CardInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  label {
    color: ${props => props.theme["base-text"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: bolder;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["purple-dark"]};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme["purple"]};
    transition: background-color 0.2s;
  }
`

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TagList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`