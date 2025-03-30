import styled from "styled-components"

export const InputButton = styled.button`
  color: ${props => props.theme.purple};
  background: transparent;
  cursor: pointer;
  border: 0;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background-color: ${props => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;
  width: 100%;
  min-width: 72px;
`
