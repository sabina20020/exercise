let list = document.getElementById("myList");

let data = ['Fish', 'Turtles', 'Whales', 'Starfish' ];
  
let list = document.getElementById("myList");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})