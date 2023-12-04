/*
const display =document.querySelector("#display");
const buttons =document.querySelectorAll("button");
buttons.forEach((item)=>{
    item.onclick= () => {
        if(IIRFilterNode.id =="clear"){
            display.innerText ="";
        
        }else if(item.id == "backspace"){
            let string = display.innerText.tostring();
            display.innerText = string.substr(0,string.length - 1);
        }else if(display.innerText!="" && item.id == "equal"){
            display.innerText == "Empty!";
            setTimeout(() => (display.innerText= ""),2000); 
        }else{
            display.innerText += item.id;
        }
    };
}); //*/
/*
let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == "Clear") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
}; //*/


document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function clearDisplay() {
      currentInput = "";
      updateDisplay();
    }
  
    function handleButtonClick(event) {
      const buttonValue = event.target.textContent;
  
      if (buttonValue === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonValue === "C") {
        clearDisplay();
      } else {
        currentInput += buttonValue;
      }
  
      updateDisplay();
    }
  
    const buttons = document.querySelectorAll(".btn-number, .btn-operator, .btn-equal, #clear");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  });
  