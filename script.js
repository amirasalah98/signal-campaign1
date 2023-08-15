//append signup text to the form section
const signupText = document.querySelector(".signup-text");
const wheelContainer=document.querySelector("#form-widget")
signupText.style.display='block'
wheelContainer.appendChild(signupText);

// wheel color after submit
var wheelItem= document.getElementsByClassName('wheel-item::before')
var wheel=document.getElementsByClassName('wheel')
var form=document.getElementsByTagName('form')
console.log(wheel);
console.log(wheelItem);

form.addEventListener("submit", () => {
    wheel.classList.add("wheelColor");
    wheelItem.classList.add("wheelColor");
    console.log(wheel);
    console.log(wheelItem);
})
