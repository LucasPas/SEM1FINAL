class Cart{
  //What is the first part of every class? Type it below.
  constructor(il,iq){
    this.ItemList = il;
    this.ItemQuantity = iq;
  }
  //Type the instance functions below this comment.
  addItem(i,q){
    this.ItemList.push(i);
    this.ItemQuantity.push(q);
  }
  totalcart(){
    let total = 0
    for(var c=0; c<ItemList.lenght;c++;){
      total= total+(this.ItemList[c]*this.ItemQuantity[c]);
    }
  }
  subCart(days){
    let subCart = new Cart([],[]);
    for(a=0; a < this.ItemList.length; a++){
      if(this.ItemList[a].shipping == days){
        subCart.push(this.ItemList[a];
      }
    }
    return subCart
  }
}
