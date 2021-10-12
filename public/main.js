import Controler from "./card.js"
import ErrorHendler from "./errorHendler.js"
 
;
const sorter = document.querySelector('.sorter')
async function fetchAsync (url) {
  document.getElementById("overlay").style.display = "block";
  let response = await fetch(url);
  let data = await response.json();

  if (!data) {
    throw new ErrorHendler("OOOOPS");
  }
  return data;
} 

try {
   
  let productList = await fetchAsync('https://fakestoreapi.com/products')
  const App = new Controler(productList)
  App.makeCards()
  sorter.addEventListener('change', App.sortCards(e.target.value))


} catch (error) {
  if (error instanceof ErrorHendler){
    alert(error.message)
  }

}

  

 
    

  
