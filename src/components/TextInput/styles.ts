import styled from "styled-components";

interface InputProps {
  gridArea: string
}

export const Input = styled.input<InputProps>`
  grid-area: ${props => props.gridArea};
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  min-height: 42px;
  padding: 0.75rem;
`