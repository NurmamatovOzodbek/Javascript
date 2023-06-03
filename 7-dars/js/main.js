// function uppercase(str){
//   let str1=str.slice(0, 1)
//   return str1.toUpperCase() + str.slice(1)
// }
// console.log(uppercase("salom"))


//1-uyga vazifa

function indexof(str,from){
  for(let i=0; i<str.length; i++){
    if(str[i]===from){
      return i
    }
  }
  return "Unday element yuq"
}
console.log(indexof("assalomu alaykum", "p"))


//2-uyga vazifa

function substr(str, index, length) {
  let str1 = '';
  let leng = index + length;
  if (index < 0) {
    index += str.length;
  }
  else if (leng > str.length) {
    leng = str.length;
  }
  for (let i = index; i < leng; i++) {
    str1 += str[i];
  }
  return str1;
}
console.log(substr("ozodbek", -1, 8))


//3-uyga vazifa


function substring(str, index, length) {
  let str1 = '';
  let leng = index + length;
  if (index < 0) {
    str1=undefined
  }
  else if (leng > str.length) {
    leng = str.length;
  }
  for (let i = index; i < leng; i++) {
    str1 += str[i];
  }
  return str1;
}
console.log(substring("ozodbek",-1,2))

//4-uyga vazifa

function slice(str, index, leng) {
  let str1 = '';
  // let leng = index + length;
  if (index < 0) {
    index += str.length;
  }
  if (leng < 0) {
    leng += str.length;
  }
  for (let i = index; i < leng; i++) {
    str1 += str[i];
  }
  return str1;
}
console.log(slice("ozodbek",-4,-1))


//5-uyga vazifa

function includes(str,from){
  for(let i=0; i<str.length; i++){
    if(str[i]===from){
      return true
    }
  }
  return false
}
console.log(includes("assalomu alaykum", "a"))


//6-uyga vazifa

function startWidth(str,from){
  for(let i=0; i<str.length; i++){
    if(str[0]===from){
      return true
    }
  }
  return false
}
console.log(startWidth("ozodbek","o"))



//7-uyga vazifa

function endWidth(str,from){
  for(let i=0; i<str.length; i++){
    if(str[str.length - 1]===from){
      return true
    }
  }
  return false
}
console.log(endWidth("ozodbek","k"))


//8-uyga vazifa

function repeat(str,count){
  for(let i=0;i<count;i++){
    str += str
    return str
  }
}
console.log(repeat("a",2))
