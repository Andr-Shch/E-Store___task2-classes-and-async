import Model from "./superClass.js"


class Controler extends Model {
  constructor(data) {
    super()
    this.data = data
    this.chosenItems = []
  }

  //render all cards from request  
  makeCards() {
    let checked = false  //lexical invoroment
    for (let product of this.data) {
      this.chosenItems.includes(''+product.id)?checked = true:checked=false //check if selected to cart
      console.log(typeof this.chosenItems[0]);
      super.render(product, checked)
      
    }
  
    document.getElementById("overlay").style.display = "none";
  }

  //Sort products with delay 1sec.
  sortCards(value) {
    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
      document.querySelector('.main').innerHTML = '';
      if (value === 'rating') {
        this.data.sort((a, b) => b.rating.rate - a.rating.rate)
        this.makeCards()
      } else if (value === 'expensive') {
        this.data.sort((a, b) => b.price - a.price)
        this.makeCards()
      } else if (value === 'cheap') {
        this.data.sort((a, b) => a.price - b.price)
        this.makeCards()
      } else {
        this.data.sort((a, b) => a.id - b.id)
        this.makeCards()
      }
    }, 1000)
  }
  //add to cart 
  addToCart(target) {
    let cart = document.querySelector('.item')
    
    if (target.className != 'card__bay__btncart') {
      return
    }
   
    target.style.backgroundImage='url(' + './images/cart2.svg'+')'

    //check if product in cart
    if (this.chosenItems.includes(target.value)) {
      target.style.backgroundImage='url(' + './images/cart2.svg'+')'
      this.chosenItems = this.chosenItems.filter(el=>el!== target.value)
      cart.innerHTML = this.chosenItems.length
    }else{
      this.chosenItems.push(target.value)
      target.style.backgroundImage='url(' + './images/cartOK.svg'+')'
      cart.innerHTML = this.chosenItems.length
    }
    this.chosenItems.length!=0?cart.style.display = 'block':cart.style.display ='none';
     
  }

}

export default Controler