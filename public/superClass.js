class Model  {
    constructor(){
       
        
    }
    render(data){ 
     
        const main = document.querySelector('.main')
         const wrappe = document.createElement('div')
         wrappe.classList.add('card')
         wrappe.innerHTML =`
         <div class="card__image">
         <img src=${data.image} alt="">
     </div>
     <div class="card__title">
         ${data.title}
     </div>
     <div class="card__category">
         Category: ${data.category}"
     </div>
     <div class="card__rating"><span class="stars-container stars-0">★★★★★</span></div>
     <div class="card__bay">
         <div class="card__bay__price">${data.price}</div>
         <button  class="card__bay__btncart" id="search-button">
            <img src="./images/cart2.svg"/>
          </button>
         `
       main.appendChild(wrappe)
       
       }
   
}


export default Model