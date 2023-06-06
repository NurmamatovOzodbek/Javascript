//1-uyga vazifa

function ArrPop(arr){
  let arr1 = []
  for(let i = 0; i < arr.length-1; i++){
    arr1[i]=arr[i]
  }
  return arr1
}
console.log(ArrPop([1,2,3,4,"salom",8]))


//2-uyga vazifa

function ArrShift(arr){
  let arr1 = []
  for(let i = 0; i < arr.length-1; i++){
    arr1[i]=arr[i+1]
  }
  return arr1
}
console.log(ArrShift([1,2,3,4,"salom",8]))


//3-uyga vazifa

function ArrUnShift(arr, newItem){
  let arr1 = [newItem]
  for(let i = 1; i < arr.length; i++){
    arr1[i]=arr[i]
  }
  return arr1
}
console.log(ArrUnShift([1,2,3,4,"salom",8],5))

//4-uyga vazifa

function ArrSplit(str,item){
  let arr1 = []
  for(let i=0; i<str.length; i++){
    arr1[i]=str[i]
  }
  return arr1
}
console.log(ArrSplit("salom Abu"))

//5-uyga vazifa

function ArrJoin(arr,item){
  let str2 = ""
  for(let i=0; i<arr.length; i++){
    str2+=arr[i]
    str2 += item
  }
  return str2
}
console.log(ArrJoin(["hi", "Abu", "how", "are", "you"], " "))

//6-uyga vazifa

function ArrPush(arr,newItem){
  arr[arr.length]=newItem
  return arr
}
console.log(ArrPush([18,26,0,126,"nima","hi"],"salom"))
