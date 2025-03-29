import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, CheckoutDeliveryAddressForm, DeliveryAddressContent, DeliveryAddressSection, OrderContainer, PaymentContainer, PaymentContent, PaymentMethod, PaymentMethodButton, Title } from "./styles";
import { TextInput } from "../components/TextInput";
import { useState } from "react";

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
    </CheckoutContainer>
  )
}