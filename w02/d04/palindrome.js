function isPalindrome(str){
  var i;
  var len = str.length;

  for(i =0; i<len/2; i++){
    //console.log(str[i] + " and " + str[len -1 -i])

    if (str[i]!== str[len -1 -i]){
      return false;
  	}
  }

  return true;
}

isPalindrome('racecar')
