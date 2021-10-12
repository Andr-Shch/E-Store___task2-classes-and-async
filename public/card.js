import Model from "./superClass.js"

 class Controler extends Model {
    constructor(data){
      super()
      this.data = data
    }
  
  makeCards (data){

    for(let product of this.data){
      console.log(product);
      super.render(product)
    }
    document.getElementById("overlay").style.display = "none";
  }
  sortCards (){
     
  }

}

export default Controler