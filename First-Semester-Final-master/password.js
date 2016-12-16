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
  validPrivateKey(){
    let key = this.privatekey
    for(let i=0; i<this.privatekey.length;i++){
    if(key[4] != "-" || key[9] != "-"){
      return false
    }
    else{
      if(number.isNaN(key[i])){
        return false
      }
    }
  }
return true;

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
