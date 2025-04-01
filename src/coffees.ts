import expresso from './assets/expresso.svg'
import americano from './assets/americano.svg'
import cremoso from './assets/expresso-cremoso.svg'
import gelado from './assets/cafe-gelado.svg'
import cafeComLeite from './assets/cafe-com-leite.svg'
import latte from './assets/latte.svg'
import capuccino from './assets/capuccino.svg'
import macchiato from './assets/macchiato.svg'
import mocaccino from './assets/mocaccino.svg'
import chocolateQuente from './assets/chocolate-quente.svg'
import cubano from './assets/cubano.svg'
import havaiano from './assets/havaiano.svg'
import arabe from './assets/arabe.svg'
import irlandes from './assets/irlandes.svg'

export const coffees = [
  {
    id: 'cafe-1',
    imageUrl: expresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: 'cafe-2',
    imageUrl: americano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: 'cafe-3',
    imageUrl: cremoso,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: 'cafe-4',
    imageUrl: gelado,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 'cafe-5',
    imageUrl: cafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90
  },
  {
    id: 'cafe-6',
    imageUrl: latte,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90
  },
  {
    id: 'cafe-7',
    imageUrl: capuccino,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: 'cafe-8',
    imageUrl: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  },
  {
    id: 'cafe-9',
    imageUrl: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90
  },
  {
    id: 'cafe-10',
    imageUrl: chocolateQuente,
    tags: ['Especial', 'Com Leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: 'cafe-11',
    imageUrl: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90
  },
  {
    id: 'cafe-12',
    imageUrl: havaiano,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90
  },
  {
    id: 'cafe-13',
    imageUrl: arabe,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90
  },
  {
    id: 'cafe-14',
    imageUrl: irlandes,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90
  },
]