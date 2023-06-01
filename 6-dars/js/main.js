//1-uyga vazifa

function floor(num){
  let num1 = num.toString().split(".").slice(0, 1) * 1
  if(num > 0){
    return num1
  }
  else{
    return num1 - 1
  }
}
console.log(floor(6.3));


//2-uyga vazifa

function ceil(num){
    let num1 = num.toString().split(".").slice(0, 1) * 1
    if(num < 0){
      return num1
    }
    else{
      return num1 + 1
    }
  }
  console.log(ceil(6.3));



//3-uyga vazifa

function round(num){
  let str = num.toString().split(".").slice(1,2)*1
  let num1 = num.toString().split(".").slice(0,1)*1
  // console.log( typeof num1)
  if(str>=5 && num>0){
    return num1+1
  }
  else if(str<5 && num>0){
    return num1
  }
  else if(str>=5 && num<0){
    return num1-1
  }
  else if(str<5 && num<0){
    return num1
  }
}
console.log(round(5.40))


//4-uyga vazifa

function trunc(num){
  let num1 = num.toString().split(".").slice(0,1)*1
  return num1
}
console.log(trunc(5.60))



//5-uyga vazifa

function pow(num,num1){
  return num**num1
}
console.log(pow(8,(1/3)))



//6-uyga vazifa

function abs(num){
  if(num<0){
    return -num
  }
  else{
    return num
  }
}
console.log(abs(-3))


//7-uyga vazifa

function sqrt(num){
  if(num>=0){
    return num**(1/2)
  }
  else{
    return "Manfiy son kiritmang. Musbat son kiriting"
  }
}
console.log(sqrt(16))