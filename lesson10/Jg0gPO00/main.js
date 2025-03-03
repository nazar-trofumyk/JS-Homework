// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let input =document.getElementsByTagName("input")[0]
let pound = document.getElementsByClassName('pound')[0]
input.oninput = function (){
   pound.innerText = input.value * 2.2
}


