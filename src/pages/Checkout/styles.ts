import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
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

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.5rem;

  background-color: ${props => props.theme["base-card"]};
  width: 448px;
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
`

export const CoffeeItemPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.3;
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  img {
    width: 64px;
    height: 64px;
  }

  div:first-child {
    display: flex;
    gap: 1.25rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span:first-child {
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Button = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${props => props.theme["base-text"]};
  font-size: 0.75rem;
  line-height: 1.3;

  background-color: ${props => props.theme["base-button"]};

  svg {
    color: ${props => props.theme.purple};
  }

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
    cursor: pointer;

    transition: background-color 0.2s;
  }
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${(props) => props.theme["base-button"]};
  width: 100%;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  color: ${props => props.theme["base-text"]};
  font-size: 0.875rem;
  line-height: 1.3;

  span {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderTotalPrice = styled.div`
  color: ${props => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  font-weight: bold;

  span {
    font-size: 1.25rem;
  }
`

export const ConfirmOrderButton = styled.button`
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  width: 100%;
  padding: 0.75rem;

  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  border: 0;
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
    cursor: pointer;

    transition: background-color 0.2s;
  }
`