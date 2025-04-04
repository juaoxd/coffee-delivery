import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfo, OrderInfoItem, SuccessContainer, SuccessContent, SuccessMessage } from './styles'
import deliverySuccess from '../../assets/delivery-success.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const PaymentMethodMessage: Record<"credit" | "debit" | "cash", string> = {
  credit: "Cartão de Crédito",
  debit: "Cartão de Débito",
  cash: "Dinheiro",
}

export function Success() {
  const { order } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (
      !order.address ||
      !order.paymentMethod
    ) {
      navigate("/");
    }
  }, [order, navigate]);

  return (
    <SuccessContainer>
      <SuccessMessage>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessMessage>
      <SuccessContent>
        <OrderInfo>
          <OrderInfoItem iconBackgroundColor='purple'>
            <MapPin weight='fill' size={16} />
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {order.address.street}, {order.address.number}
                </span>
              </p>
              <p>
                {order.address.neighborhood} - {order.address.city}, {order.address.state}
              </p>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconBackgroundColor='yellow'>
            <Timer weight='fill' size={16} />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconBackgroundColor='yellow-dark'>
            <CurrencyDollar size={16} />
            <div>
              <p>Pagamento na entrega</p>
              <span>{PaymentMethodMessage[order.paymentMethod]}</span>
            </div>
          </OrderInfoItem>
        </OrderInfo>
        <img src={deliverySuccess} alt='' />
      </SuccessContent>
    </SuccessContainer>
  )
}
