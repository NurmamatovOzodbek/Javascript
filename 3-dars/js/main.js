
//1-uyga vazifa

let number = prompt("Sonni kiriting")

if(number % 2 == 0){
  alert("Kiritilgan son juft son")
}
else if(number % 2 == 1){
  alert("Kiritilgan son toq son")
}
else{
  alert("Iltimos butun son kiriting")
}

//2-uyga vazifa

let monthnumber=prompt("Oyni kiriting")

if(monthnumber==1 || monthnumber==2 || monthnumber==12){
  alert("Qish fasliga tegishli")
}
else if(monthnumber==3 || monthnumber==4 || monthnumber==5){
  alert("Bahor fasliga tegishli")
}
else if(monthnumber==6 || monthnumber==7 || monthnumber==8){
  alert("Yoz fasliga tegishli")
}
else if(monthnumber==9 || monthnumber==10 || monthnumber==11){
  alert("Kuz fasliga tegishli")
}
else{
  alert("Unday oy yuq")
}

//3-uyga vazifa

let daynumber=prompt("Hafta raqamini kiriting")

switch(daynumber){
  case "1":
    alert("Dushanba")
    break
  case "2":
    alert("Seshanba")
    break
  case "3":
    alert("Chorshanba")
    break
  case "4":
    alert("Payshanba")
    break
  case "5":
    alert("Juma")
    break
  case "6":
    alert("Shanba")
    break
  case "7":
    alert("Yakshanba")
    break
  default:
    alert("Unday hafta raqami yuq, uzi bir hafta 7 kunku")
}


//4-uyga vazifa

let hours=prompt("Vaqtni kiriting")

if(hours=>0 && hours<=6){
  alert("Good night")
}
else if(hours>6 && hours<=12){
  alert("Good morning")
}
else if(hours>12 && hours<=18){
  alert("Good afternoon")
}
else if(hours>18 && hours<=23){
  alert("Good evening")
}
else{
  alert("Unaqa vaqt hech qayerda yuqku")
}