let bill = document.querySelector(".bill");
const buttons = document.getElementsByClassName("btns");
let people = document.querySelector(".people");
const tip = document.querySelector(".dolari");
const costum = document.querySelector(".btn");
let total = document.querySelector(".total");
let reset=document.querySelector(".math")
let button = 0;
let procent;


bill.addEventListener("mouseover",()=>{
  if(bill.value>=1){
    bill.style.border="2px solid green"

  }else{
    bill.style.border="2px solid red"
  }
  
  if (bill.value[0] == 0 && bill.value[1] !== ".") {
    bill.style.border="2px solid red"
   
  }


})
bill.addEventListener("mouseout",()=>{
  bill.style.border="none"
})


costum.addEventListener("input", (c) => {
  if (c.target.value[0] == 0 && c.target.value[1] !== ".") {
    return false;
  }
  

  procent = c.target.value;
  if(costum.value>=1){
    
    costum.style.border="2px solid green";
  
}else{
  procent=0;
  costum.style.border="2px solid red"
  return false;
  
}



  validation();
  dele_te();
});
costum.addEventListener("mouseover",()=>{
  if(costum.value>=1){
    costum.style.border="2px solid green"

  }else{
    costum.style.border="2px solid red"
  }
  
  if (costum.value[0] == 0 && costum.value[1] !== ".") {
    costum.style.border="2px solid red"
   
  }


})
costum.addEventListener("mouseout",()=>{
  costum.style.border="none"
})

const click_button = (event) => {
  if (button !== 0) {
    button.style.backgroundColor = "";
    button.style.color = "";
  }

  button = event.target;
  button.style.backgroundColor = "#26C2AE";
  button.style.color = "#00474B";
  costum.value = "";
  procent = button.textContent.slice(0, -1);

  validation();
  
};
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", click_button);
}
costum.addEventListener("click", () => {
  if (button !== 0) {
    button.style.backgroundColor = "";
    button.style.color = "";
  }
  if (costum.value[0] == undefined) {
    procent = 0;
  }

  validation();
  dele_te()
});

bill.addEventListener("click",()=>{
  
  
  if (bill.value[0] == 0 && bill.value[1] !== ".") {
    bill.style.border="2px solid red"
   
  }
  if(bill.value>=1){
    
      bill.style.border="2px solid green"
    
  }else{
    bill.style.border="2px solid red"
  }
})
bill.addEventListener("input", (e) => {
  console.log(bill.value)
  
 

  if (e.target.value[0] ==0 && e.target.value[1] !== ".") {
    
    bill.style.border="2px solid red"
    return false;
  }
  
  if (e.target.value[0]==".") {
    bill.style.border="2px solid red"
    return false;
    
    
  }
  if(bill.value>=1){
    
    bill.style.border="2px solid green"
  
}
  
  

  validation();
  dele_te()
});

people.addEventListener("input", (d) => {
 
  if(people.value>=1){
    
    people.style.border="2px solid green";
  
}else{
  people.style.border="2px solid red"
  return false;
}

  validation();
  dele_te()
});

people.addEventListener("mouseover",()=>{
  if(people.value>=1){
    people.style.border="2px solid green"

  }else{
    people.style.border="2px solid red"
  }
  if (people.value[0] == 0 && people.value[1] !== ".") {
    people.style.border="2px solid red"
   
  }


})
people.addEventListener("mouseout",()=>{
  people.style.border="none"
})


let validation = function () {
  if (costum.value[0] == undefined && procent !== 0) {
    total.textContent = "$0.00";
    tip.textContent = "$0.00";
  }

  if (bill.value >= 1 && procent >= 1 && people.value >= 1) {
    total.textContent =
      "$" +
      (
        ((parseInt(bill.value) * parseInt(procent)) / 100 +
          parseInt(bill.value)) /
        parseInt(people.value)
      ).toFixed(2);
    tip.textContent =
      "$" +
      (
        (parseInt(bill.value) * parseInt(procent)) /
        100 /
        parseInt(people.value)
      ).toFixed(2);
  } else {
    total.textContent = "$0.00";
    tip.textContent = "$0.00";
  }
};

let dele_te=function(){
if(bill.value >= 1 && procent >= 1 && people.value >= 1){
  reset.addEventListener("click",()=>{
    total.textContent = "$0.00";
    tip.textContent = "$0.00";
    procent="";
    bill.value="";
    costum.value="";
    people.value="";
    
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "";
      buttons[i].style.color = "";
    }
  
  })

}

  

}
