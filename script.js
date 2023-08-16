//append signup text to the form section
const signupText = document.querySelector(".signup-text");
const wheelContainer=document.querySelector("#form-widget")
signupText.style.display='block'
wheelContainer.appendChild(signupText);

//congrats 
document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");
  const congrats=document.querySelector(".congrats-banner")

  document.body.appendChild(newDiv);
  newDiv.innerHTML=congrats


}

// const congrats=document.querySelector(".congrats-banner")
// document.body.appendChild(congrats)
// const form= document.querySelector('.Form');
// const mainContent= document.getElementsByClassName('main-content1')
// console.log(mainContent);
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     mainContent.style.display='none'
// })