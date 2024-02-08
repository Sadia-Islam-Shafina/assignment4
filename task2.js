function checkName(name) {

   

  if(typeof name!=="string" ){
    return 'Invalied';
  }
  name= name.toUpperCase();
    const last_word= name[name.length-1];

 if( ['A', 'Y', 'I', 'E', 'O', 'U', 'W'] .includes(last_word)){
    return 'Good Name';
}
else{
    return 'Bad Name';
}

}
console.log(checkName ("sadiWX"));


