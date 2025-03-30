import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { Actions, Button, CheckoutContainer, CheckoutDeliveryAddressForm, CoffeeItem, CoffeeItemPrice, ConfirmOrder, ConfirmOrderButton, DeliveryAddressContent, DeliveryAddressSection, Details, Divider, OrderContainer, OrderSummary, OrderTotalPrice, PaymentContainer, PaymentContent, PaymentMethod, PaymentMethodButton, SelectedCoffees, Title } from "./styles";
import { TextInput } from "../../components/TextInput";
import { useState } from "react";

import cafeImg from '../../assets/expresso.svg'
import { InputNumber } from "../../components/InputNumber";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'cash' | null>(null)

  return (
    <CheckoutContainer>
      <OrderContainer>
        <Title>Complete seu pedido</Title>
        <DeliveryAddressSection>
            <DeliveryAddressContent>
              <MapPinLine size={22} />
              <div>
                <span>Endereco de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </DeliveryAddressContent>
            <CheckoutDeliveryAddressForm>
              <TextInput placeholder="CEP"  gridArea="cep"/>
              <TextInput placeholder="Rua" gridArea="street"/>
              <TextInput placeholder="Numero" gridArea="number"/>
              <TextInput placeholder="Complemento" gridArea="fullAddress"/>
              <TextInput placeholder="Bairro" gridArea="neighborhood"/>
              <TextInput placeholder="Cidade" gridArea="city"/>
              <TextInput placeholder="UF" gridArea="state"/>
            </CheckoutDeliveryAddressForm>
        </DeliveryAddressSection>

        <PaymentContainer>
          <PaymentContent>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </PaymentContent>

          <PaymentMethod>
              <PaymentMethodButton onClick={() => setPaymentMethod('credit')} method={paymentMethod} value="credit">
                <CreditCard size={16} />
                Cartão de crédito
              </PaymentMethodButton>
              <PaymentMethodButton onClick={() => setPaymentMethod('debit')} method={paymentMethod} value="debit">
                <Bank size={16} />
                Cartão de débito
              </PaymentMethodButton>
              <PaymentMethodButton onClick={() => setPaymentMethod('cash')} method={paymentMethod} value="cash">
                <Money size={16} />
                Dinheiro
              </PaymentMethodButton>
            </PaymentMethod>
        </PaymentContainer>
      </OrderContainer>

      <SelectedCoffees>
        <Title>Cafés selecionados</Title>
        <ConfirmOrder>
          <CoffeeItem>
            <div>
              <img src={cafeImg}  />
              <Details>
                <span>Expresso Tradicional</span>
                <Actions>
                  <InputNumber />
                  <Button>
                    <Trash size={16} />
                    Remover
                  </Button>
                </Actions>
              </Details>
            </div>
            <CoffeeItemPrice>R$ 9,90</CoffeeItemPrice>
          </CoffeeItem>

          <Divider />

          <CoffeeItem>
            <div>
              <img src={cafeImg}  />
              <Details>
                <span>Expresso Tradicional</span>
                <Actions>
                  <InputNumber />
                  <Button>
                    <Trash size={16} />
                    Remover
                  </Button>
                </Actions>
              </Details>
            </div>
            <CoffeeItemPrice>R$ 9,90</CoffeeItemPrice>
          </CoffeeItem>

          <Divider />

          <OrderSummary>
            <div>
             Total de itens
              <span>R$ 29,70</span>
            </div>

            <div>
              Entrega
              <span>R$ 3,50</span>
            </div>

            <OrderTotalPrice>
              Total
              <span>R$ 33,20</span>
            </OrderTotalPrice>
          </OrderSummary>

          <ConfirmOrderButton>
            Confirmar pedido
          </ConfirmOrderButton>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}