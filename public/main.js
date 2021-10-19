import Controler from "./card.js"

const sorter = document.querySelector('.sorter')
const main = document.querySelector('main')

const App = new Controler()

App.getProductsByAPI('https://fakestoreapi.com/products')   

sorter.addEventListener('change', (e) => App.sortCards(e.target.value))

//access to edit and addtocart butons
 main.addEventListener('click', (e) => App.clickObserver(e.target))
//exit from edit window
 document.querySelector('.overlay-edit').onclick = (e) => {

  if (e.target.className == 'overlay-edit') { document.querySelector('.overlay-edit').style.display = 'none' }

}














