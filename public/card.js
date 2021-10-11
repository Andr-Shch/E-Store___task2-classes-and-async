export class Card {
    constructor(data){
      this.img = data.image
      this.title = data.title
      this.category = data.category
      this.rate = data.rating.rate
      this.price = data.price
    }
   render(perentNode){
     const wrappe = document.createElement('div')
     wrappe.classList.add('card')
     wrappe.innerHTML =`
     <div class="card__image">
     <img src=${this.img} alt="">
 </div>
 <div class="card__title">
     ${this.title}
 </div>
 <div class="card__category">
     Category: ${this.category}"
 </div>
 <div class="card__rating"><span class="stars-container stars-0">★★★★★</span></div>
 <div class="card__bay">
     <div class="card__bay__price">${this.price}</div>
     <button  class="card__bay__btncart" id="search-button">
        <img src="./images/cart2.svg"/>
      </button>
     `
  perentNode.appendChild(wrappe)
   }
}
