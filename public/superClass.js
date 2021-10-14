class Model  {
    constructor(){
       
        
    }
    render(data, checked){ 
 
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
     <div class="card__rating"><span style="--rating: ${data.rating.rate};" class="stars-container stars-0">★★★★★</span></div>
     
     <div class="card__bay">
         <div class="card__bay__price">${data.price}$</div>
          <button ${checked?'style="background-image: url('+ './images/cartOK.svg'+')"':''} value="${data.id}"  class="card__bay__btncart" id="search-button">
          </button>
     </div>    
       <button class="card__edit" src='./images/edit.svg' value="${data.id}" />
         `
       main.appendChild(wrappe)
       
       }
   
}

// <img src="./images/cart2.svg"/>``    
export default Model