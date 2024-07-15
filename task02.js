function palindrome(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
         reverse=reverse+str[i];
    }
    if(reverse==str){
      console.log(reverse+" is a palindrome word");
    }else{
      console.log(str+" is not a palindrome word");
    }
  }
  palindrome("malayalam");
  palindrome("juice");