//append signup text to the form section
const signupText = document.querySelector(".signup-text");
const wheelContainer=document.querySelector("#form-widget")
signupText.style.display='block'
wheelContainer.appendChild(signupText);

// wheel color after submit
var wheel=document.querySelector('.wheel')
var wheelItem= document.querySelector('.wheel-item::before')
var form=document.getElementsByTagName('form')
console.log(wheel);
console.log(wheelItem);

form.addEventListener("submit", (e) => {
    e.preventDefault()
    wheel.classList.add("wheelColor");
    wheel.classList.remove("wheel");
    wheelItem.classList.add("wheelColor");
    console.log(wheel);
    console.log(wheelItem);
})
