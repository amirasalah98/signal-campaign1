//append signup text to the form section
const signupText = document.querySelector(".signup-text");
const wheelContainer=document.querySelector("#form-widget")
signupText.style.display='block'
wheelContainer.appendChild(signupText);

// wheel color after submit
var wheel=document.getElementsByClassName('wheel')
var wheelItem= document.getElementsByClassName('wheel-item::before')
var form=document.getElementsByTagName('form')
console.log(wheel);
console.log(wheelItem);

// form.addEventListener("submit", () => {
    // wheelItem.setAttribute('style', 'color:black !important');

//     e.preventDefault()
//     wheel.classList.add("wheelColor");
//     wheelItem.classList.add("wheelColor");
    console.log(wheel);
    console.log(wheelItem);
// })
// wheel.style.color="#000";
    // wheelItem[0].style.backgroundColor="#000";
    // wheelItem.setAttribute('style', 'color:black !important');
    // document.head.innerHTML += '<style> .wheel { color: #fff `!important` } </style>';
