// function calc(arg1, arg2, operator){
//   if(operator=="+"){
//     console.log(arg1+arg2 )
//   }
//   else if(operator=="-"){
//     console.log(arg1-arg2 )
//   }
//   else if(operator=="*"){
//     console.log(arg1*arg2 )
//   }
//   else if(operator=="/"){
//     if(arg2==0){
//       console.log("Xato")
//     }
//     else{
//       console.log(arg1/arg2 )
//     }
//   }
//   else if(operator==" "){
//     console.log(arg1+arg2 )
//   }
//   else{
//     console.log("Operator xato")
//   }
// }


// calc(5,0,"/")

//1-uyga vazifa

function calcAverage(arr){
  let s=0
  for(let i = 0; i<arr.length; i++){
    s+=arr[i]
  }
  let urta = s/arr.length
  return(urta)
}
console.log(calcAverage([1,2,3,4,5,6,7,8]))

calcAverage([1,2,3,4,5,6,7,8])



//2-uyga vazifa

function isPalindrom(str){
  let str1 = ""
  for(let i=0; i<str.length; i++){
    str1=str[i]+=str1
  }
  if(str1===str){
    return(true)
  }
  else{
    return(false)
  }
}
console.log(isPalindrom("salom"))


//3-uyga vazifa

function countVowels(str){
  let str1 = "";
  for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
      str1+=str[i]
    }
    }
    return(str1.length)
}
console.log(countVowels("aaa bbb asa d E uaaaaaa"))

countVowels("aaa bbb asa d E uaaaaaa")