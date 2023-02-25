let tabs = document.querySelectorAll(".container form .tab");
let thanksTab = document.querySelector("form .thanks");
let phases = document.querySelectorAll(".sidebar .phase")
let nextBtn = document.querySelector(".buttons .next");
let prevBtn = document.querySelector(".buttons .back");
let inputs = document.querySelectorAll(".info input");
// let name = document.querySelector(".info #name");
// let email = document.querySelector(".info #email");
// let phone = document.querySelector(".info #phone");

let index = 0;

nextBtn.onclick = function(e) {
  e.preventDefault();

  if(!validate()) {
    return false;
  }

  if(index < tabs.length-1) {
    index++;
    showTab();
  } else if (nextBtn.innerText == "Submit") {
    tabs[index].classList.remove("active");
    thanksTab.style.display = "flex";
    nextBtn.parentElement.remove();
  }

  
}

prevBtn.onclick = function(e) {
  e.preventDefault();

  if(index > 0) {
    index--;
    showTab();
  }

}

function showTab() {
  // Set Active Tab
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabs[index].classList.add("active");

  // Set Active Phase Number
  phases.forEach((num) => {
    num.classList.remove("active");
  });
  phases[index].classList.add("active")
  
  // Check For Back Button
  if (index == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }

  // Check For Next Button
  if (index == (tabs.length - 1)) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next Step";
  }

}
showTab();

function validate() {
  let valid = true;

  inputs.forEach((input) => {
      if(['', ' ', null].includes(input.value)) {
        input.parentElement.classList.add("error");
        valid = false; 
    } else {
      input.parentElement.classList.remove("error");
    }
  });
  return valid;
}

inputs.forEach((input) => {
  input.oninput = function(){
    this.parentElement.classList.remove("error");
  }
});