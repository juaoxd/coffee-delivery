import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react'
import {
  Actions,
  Button,
  CheckoutContainer,
  CheckoutDeliveryAddressForm,
  CoffeeItem,
  CoffeeItemPrice,
  ConfirmOrder,
  ConfirmOrderButton,
  DeliveryAddressContent,
  DeliveryAddressSection,
  Details,
  Divider,
  OrderContainer,
  OrderSummary,
  OrderTotalPrice,
  PaymentContainer,
  PaymentContent,
  PaymentMethod,
  PaymentMethodButton,
  SelectedCoffees,
  Title,
} from './styles'
import { TextInput } from '../../components/TextInput'
import { useContext, useState } from 'react'

import { InputNumber } from '../../components/InputNumber'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from '../../contexts/CartContext'

const deliveryAddressFormSchema = z.object({
  cep: z.string().length(9),
  street: z.string(),
  number: z.string(),
  fullAddress: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
})

type DeliveryAddressForm = z.infer<typeof deliveryAddressFormSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'cash' | null>(null)

  const deliveryAddressForm = useForm<DeliveryAddressForm>({
    resolver: zodResolver(deliveryAddressFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      fullAddress: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, register, reset } = deliveryAddressForm

  function handleCreateOrder(data: DeliveryAddressForm) {
    console.log(data)
    reset()
  }

  const { coffees, updateQuantity, quantities } = useContext(CartContext)

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
          <CheckoutDeliveryAddressForm id='deliveryAddressForm' onSubmit={handleSubmit(handleCreateOrder)}>
            <TextInput id='cep' placeholder='CEP' gridArea='cep' {...register('cep')} />
            <TextInput id='street' placeholder='Rua' gridArea='street' {...register('street')} />
            <TextInput id='number' placeholder='Numero' gridArea='number' {...register('number')} />
            <TextInput id='fullAddress' placeholder='Complemento' gridArea='fullAddress' {...register('fullAddress')} />
            <TextInput id='neighborhood' placeholder='Bairro' gridArea='neighborhood' {...register('neighborhood')} />
            <TextInput id='city' placeholder='Cidade' gridArea='city' {...register('city')} />
            <TextInput id='state' placeholder='UF' gridArea='state' {...register('state')} />
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
            <PaymentMethodButton onClick={() => setPaymentMethod('credit')} method={paymentMethod} value='credit'>
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentMethodButton>
            <PaymentMethodButton onClick={() => setPaymentMethod('debit')} method={paymentMethod} value='debit'>
              <Bank size={16} />
              Cartão de débito
            </PaymentMethodButton>
            <PaymentMethodButton onClick={() => setPaymentMethod('cash')} method={paymentMethod} value='cash'>
              <Money size={16} />
              Dinheiro
            </PaymentMethodButton>
          </PaymentMethod>
        </PaymentContainer>
      </OrderContainer>

      <SelectedCoffees>
        <Title>Cafés selecionados</Title>
        <ConfirmOrder>
          {coffees.map((coffee) => {
            return (
              <>
                <CoffeeItem>
                  <div>
                    <img src={coffee.imgUrl} />
                    <Details>
                      <span>{coffee.title}</span>
                      <Actions>
                        <InputNumber quantity={quantities[coffee.id]} updateQuantity={updateQuantity} coffeeId={coffee.id}/>
                        <Button>
                          <Trash size={16} />
                          Remover
                        </Button>
                      </Actions>
                    </Details>
                  </div>
                  <CoffeeItemPrice>R$ {(coffee.price * quantities[coffee.id]).toFixed(2).replace('.', ',')}</CoffeeItemPrice>
                </CoffeeItem>
                <Divider />
              </>
            )
          })}

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

          <ConfirmOrderButton type='submit' form='deliveryAddressForm'>
            Confirmar pedido
          </ConfirmOrderButton>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
