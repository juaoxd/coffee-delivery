import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: bold;
`

export const DeliveryAddressContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }

  div > span {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3;
  }

  div > p {
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CheckoutDeliveryAddressForm = styled.form`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const Input = styled.input`
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  min-height: 42px;
  padding: 0.75rem;
`

export const DeliveryAddressSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  width: 100%;
  max-width: 640px;
  border-radius: 4px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  width: 100%;
  max-width: 640px;
  border-radius: 4px;
`

export const PaymentContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme["purple-dark"]};
  }

  div > span {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3;
  }

  div > p {
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const PaymentMethod = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface PaymentMethodButtonProps {
  value: 'credit' | 'debit' | 'cash'
  method: 'credit' | 'debit' | 'cash' | null
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  background-color: ${props => props.value === props.method ? props.theme["purple-light"] : props.theme["base-button"]};
  border: ${props => props.value === props.method ? `1px solid ${props.theme.purple}` : 'none' };
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme["base-text"]};
  font-size: 0.75rem;
  line-height: 1.3;
  width: 178px;
  height: 51px;
  border-radius: 6px;

  svg {
    color: ${props => props.theme["purple"]};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme["base-hover"]};
    transition: background-color 0.2s;
  }
`