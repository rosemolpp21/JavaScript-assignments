// Create a button and div using JS, when clicked on the button your basic details should be shown in the div. 
// The static html file should only contain the basic HTML structure, no div/buttons .
const firstdiv = document.createElement('div');
firstdiv.id = 'first-div'
firstdiv.style.width = "450px";
firstdiv.style.height = "160px";
firstdiv.style.background = "pink";
firstdiv.style.display = "flex";
firstdiv.style.justifyContent = "center";
firstdiv.style.alignItems = "center";
const firstbutton = document.createElement("button");
firstbutton.id = 'first-button';
firstbutton.textContent = "show details";
firstbutton.style.margin="10px 0";
const firstbreak = document.createElement("br");
document.body.appendChild(firstdiv);
document.body.appendChild(firstbutton);
document.body.appendChild(firstbreak);
document.getElementById("first-button").onclick = function () {
    document.getElementById("first-div").innerHTML = "name - Rose" + "<br>" + "Place : Thrissur"+ "<br>" ;
}




// Consider an array with name of 5 fruits, map this array and create five checkboxes with their corresponding names.
// In a div show the fruit names which are checked.
const fruitsdiv = document.createElement("div");
fruitsdiv.id = "selectedFruits";
fruitsdiv.style.backgroundColor="pink";
document.body.appendChild(fruitsdiv);
let fruits = ["apple", "mango", "grapes", "kiwi", "jackfruit"];
fruits.forEach((value, index) => {
    const firstlabel = document.createElement("label");
    firstlabel.textContent = value
    const firstinput = document.createElement("input");
    firstinput.type = "checkbox";
    firstinput.id = value;
    firstinput.addEventListener("change",showfruits)
    const firstbreak = document.createElement("br")
    document.body.appendChild(firstlabel);
    document.body.appendChild(firstinput);
    document.body.appendChild(firstbreak);
})
function showfruits(){
        const checkedfruits = fruits.filter(fruit => document.getElementById(fruit).checked);
        fruitsdiv.textContent=checkedfruits.join(" ");
};


// Create a toggle button, console the values as either true/ false when toggled.
const secondbutton = document.createElement("button");
secondbutton.id = 'second-button';
secondbutton.textContent = "toggle button";
secondbutton.style.marginTop="20px";
document.body.appendChild(secondbutton);
let toggle = false;
document.getElementById("second-button").onclick = function () {
    if (toggle == false) {
        toggle = true;
        console.log(true);
    }
    else {
        toggle = false;
        console.log(false);
    }
}


// Create an image slider without referring online codes, completely by yourself.
const slideimg1 = document.getElementById("slide-img-1");
const slideimg2 = document.getElementById("slide-img-2");
const slideimg3 = document.getElementById("slide-img-3");
const slideimg4 = document.getElementById("slide-img-4");
const slideimg5 =document.getElementById("slide-img-5");
const slideelements = [slideimg1, slideimg2, slideimg3, slideimg4,slideimg5];
let slidevalue = 0;
slideelements[slidevalue].style.zIndex = "1";
document.getElementById("left-button").onclick = function () {
    slidevalue = slidevalue-1;
    if(slidevalue<0){
        slidevalue=4;
    }
    for (i = 0; i<5; i++) {
        if (i ==slidevalue) {
            slideelements[i].style.display = "block";
        }
        else {
            slideelements[i].style.display = "none";
        }
    }
}
document.getElementById("right-button").onclick = function () {
    slidevalue = (slidevalue + 1) % 5;
    for (i = 0; i < 5; i++) {
        if (i == slidevalue) {
            slideelements[i].style.display = "block";
        }
        else {
            slideelements[i].style.display = "none";
        }
    }
}
