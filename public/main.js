import Controler from "./card.js"
import ErrorHendler from "./errorHendler.js"

const sorter = document.querySelector('.sorter')
const main = document.querySelector('main')

const App = new Controler()

try {

  App.getProductsByAPI('https://fakestoreapi.com/products')   

} catch (error) {

  console.log(error.message)

}

sorter.addEventListener('change', (e) => App.sortCards(e.target.value))

//access to edit and addtocart butons
main.addEventListener('click', (e) => App.clickObserver(e.target))

//exit from edit window
document.querySelector('.overlay-edit').onclick = (e) => {

  if (e.target.className == 'overlay-edit') { document.querySelector('.overlay-edit').style.display = 'none' }

}














