class Item{
  //Fill in the item class below this comment.
  constructor(n,p,s){
    this.name = n
    this.price = p
    this.shipping = s
  }
}
//Create your three test items below this comment.
let Watch = new Item("Apple Watch 2",350.99,4);
let Shoes = new Item("Yeezy's",450.99,2);
let Games = new Item("Xbox One", 249.99,5);

console.log(Games.shipping)
