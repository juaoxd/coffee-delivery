import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import homeImage from '../../assets/home-image.svg'
import { CoffeeList, CoffeeSection, HeroContent, HeroSection, ListContainer, ListItem, TextContainer } from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../coffees'

export function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <aside>
            <TextContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </TextContainer>
            <ListContainer>
                <ListItem logoBackgroundColor='darkYellow'>
                  <span>
                    <ShoppingCart size={20} weight='fill'/>
                  </span>
                  Compra simples e segura
                </ListItem>
                <ListItem logoBackgroundColor='gray'>
                  <span>
                    <Package size={20} weight='fill'/>
                  </span>
                  Embalagem mantém o café intacto
                </ListItem>
                <ListItem logoBackgroundColor='yellow'>
                  <span>
                    <Timer size={20} weight='fill'/>
                  </span>
                  Entrega rápida e rastreada
                </ListItem>
                <ListItem logoBackgroundColor='purple'>
                  <span>
                    <Coffee size={20} weight='fill'/>
                  </span>
                  O café chega fresquinho até você
                </ListItem>
            </ListContainer>
          </aside>
          <img src={homeImage} alt="Embalagem do cafe com graos ao lado." />
        </HeroContent>
      </HeroSection>
      <CoffeeSection>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          { coffees.map((coffee) => {
              return <CoffeeCard imgUrl={coffee.imageUrl} tags={coffee.tags} title={coffee.title} description={coffee.description} />
            }
          )}
        </CoffeeList>
      </CoffeeSection>
    </>
  )
}