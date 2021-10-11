import {Card} from "./card.js"

  
  const main = document.querySelector('.main')

  const card = new Card(
      {
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
          rate: 4.1,
          }
  })

  card.render(main)