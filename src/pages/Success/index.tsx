import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderInfo, OrderInfoItem, SuccessContainer, SuccessContent, SuccessMessage } from "./styles";
import deliverySuccess from '../../assets/delivery-success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessMessage>
      <SuccessContent>
        <OrderInfo>
          <OrderInfoItem iconBackgroundColor='purple'>
            <MapPin weight="fill" size={16} />
            <div>
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconBackgroundColor='yellow'>
            <Timer weight="fill" size={16} />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconBackgroundColor='yellow-dark'>
            <CurrencyDollar size={16} />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </OrderInfoItem>
        </OrderInfo>
      <img src={deliverySuccess} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}