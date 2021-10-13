import Controler from "./card.js"
import ErrorHendler from "./errorHendler.js"
 

const sorter = document.querySelector('.sorter')
const main = document.querySelector('main')
const addToCartBtnS = document.querySelectorAll('.card__bay__btncart')
let cart =  document.querySelector('.item') 

async function fetchAsync (url) {
  document.getElementById("overlay").style.display = "block";
  let response = await fetch(url);
  let data = await response.json();

  if (!data) {
    throw new ErrorHendler("OOOOPS");
  }
  return data;
} 
 

//try {
   
  let productList = await fetchAsync('https://fakestoreapi.com/products')
  const App = new Controler(productList)
  
  App.makeCards()
 
  sorter.addEventListener('change', (e)=>App.sortCards(e.target.value))
  
  for ( let btn of addToCartBtnS){
    btn.addEventListener('click', (e)=> add(e.target.value) )
  }

   main.addEventListener('click', (e)=>App.addToCart(e.target))




// } catch (error) {
//   if (error instanceof ErrorHendler){
//     alert(error.message)
//   }

// }







 

 
    

  
