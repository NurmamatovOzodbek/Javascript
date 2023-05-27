
//1-uyga vazifa

let arr = [1,2,3,4,5,10,25,125]
let s=0
for(i=0; i<arr.length; i++){
  s+=arr[i]
}
console.log(s)

//2-uyga vazifa

let arr = [1,-2,-3,4,-5,10,-25,125]
let s=0
// let arr[i]=1
for(i=1; i<arr.length; i++){
  if(arr[i]<0){
    s+=arr[i]
  }
}
console.log((-1)*s)


//3-uyga vazifa

let arr = [1,-4,5,-10,-10,-23,-34,-4,-34,54]
// let a = arr[i]
// let b = arr[i+1]
for(i=0; i<arr.length; i++){
  for(j=i+1; j<arr.length; j++){
    if(arr[i]==arr[j]){
      console.log(arr[i])
    }
  }
}