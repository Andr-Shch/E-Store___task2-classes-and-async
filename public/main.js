import Controler from "./card.js"
import ErrorHendler from "./errorHendler.js"
 

const sorter = document.querySelector('.sorter')
const main = document.querySelector('main')
let cart =  document.querySelector('.item') 


async function fetchAsync (url) {
  document.getElementById("overlay").style.display = "block";
  let response = await fetch(url);
  let data = await response.json();

  if (!data) {
    throw new ErrorHendler("OOOOPS");
  }
   return  data;
} 
 

try {

  let productList = await fetchAsync('https://fakestoreapi.com/products') // bad idea, but working
 
  // fetchAsync('https://fakestoreapi.com/products').then(data =>App =  new Controler(data))

   const App = new Controler(productList)
  console.log(App);
  App.makeCards()
 
  sorter.addEventListener('change', (e)=>App.sortCards(e.target.value))
  

 // need click observer
  // main.addEventListener('click', (e)=>App.addToCart(e.target))
   
   main.addEventListener('click', (e)=>App.clickObserver(e.target))

    document.querySelector('.overlay-edit').onclick=(e)=>{ 
  
    if (e.target.className=='overlay-edit') {document.querySelector('.overlay-edit').style.display='none'} 
  
    }

} catch (error) {
  if (error instanceof ErrorHendler){
    alert(error.message)
  }

}







 

 
    

  
