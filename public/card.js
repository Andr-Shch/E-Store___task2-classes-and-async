import Model from "./superClass.js"


class Controler extends Model {
  constructor(data) {
    super()
    this.data = data
    this.chosenItems = []
  }
  
 //find clicks on buttons what we need
  clickObserver(target) {
    switch (target.className) {
      case 'card__bay__btncart':
        return  this.addToCart(target)
      case 'card__edit':
        return   this.editItem(target)
      default:
        return
    }
  }

 //edit card title and category
  editItem(target){
    document.querySelector('.overlay-edit').style.display='flex'
    let title = document.querySelector('.edit__title')
    let category= document.querySelector('.edit__category')
    let price = document.querySelector('.edit__price')
     
    //open editor  with curent state
    for (let card of this.data){
       if(card.id==target.value){
           title.value=card.title
           category.value = card.category
           price.value = card.price 
       }
     }
 
    

    document.querySelector('.edit__btn').onclick =  ()=>{
      
      this.data= this.data.map(el=>el.id==target.value?{...el, title:title.value, category:category.value, price:price.value}:el)   

     
      this.makeCards()
      document.querySelector('.overlay-edit').style.display='none'
    }
  
    console.log(this.data);
    
  }


  //render all cards from request  
  makeCards() {
    let checked = false  //lexical invoroment
    document.querySelector('.main').innerHTML = ''

    for (let product of this.data) {
      this.chosenItems.includes(''+product.id)?checked = true:checked=false //check if selected to cart
      super.render(product, checked)
      
    }
  
    document.getElementById("overlay").style.display = "none";
  }

 
  
  //add to cart 
  addToCart(target) {
    let cart = document.querySelector('.item')
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

   //Sort products with delay 1sec.
  sortCards(value) {
    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
      document.querySelector('.main').innerHTML = ''
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
}

export default Controler