import { HeaderContainer, NavContainer } from "./styles";
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />
      <NavContainer>
        <span>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Porto Alegre, RS
        </span>
        <NavLink to='/checkout'>
          <ShoppingCart size={22} weight="fill"/>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}