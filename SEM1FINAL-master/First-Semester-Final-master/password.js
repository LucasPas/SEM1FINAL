class Password{
  //The first part of the class.
  constructor(pu,pv){
    this.publickey = pu
    this.privatekey = pv
  }
  //Instance functions below this comment.
  validPublicKey(){
    while(25 >= publickey.length &&  publickey.length >= 8){
      return true
    }
    else{
      return false
    }
  }


  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    var limit = 14
    for(var x = 0; x<limit;x++){
      if(x==4 || x==9){
        key += "-"
      }
      else{
        var number = Math.random()*10
        number = Math.floor(number)
        key += number
      }
    }
    return key
  }
}
