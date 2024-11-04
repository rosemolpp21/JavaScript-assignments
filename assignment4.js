// Create a div with background color red, create buttons
// to hide the div
document.getElementById("hide-button").onclick = function () {
    document.getElementById("main-container").style.display = 'none';
};

// to change the background color of the div
const colors = ["red", "blue", "green", "purple", "orange", "yellow", "grey", "pink", "brown", "black"];
let index = 0;
document.getElementById("color-button").onclick = function () {
    document.getElementById("main-container").style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
};


// to show your basic details on the div, the details should hide/show, on the click.
document.getElementById("show-details-button").onclick = function () {
    const details = document.getElementById("details");
    if (details.style.display == "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
};

// Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before (don't use CSS to attain the hovering functionality)

document.getElementById('first-select-box').onchange = function () {
    var selectBox = document.getElementById('first-select-box');
    if (selectBox.value == '9') {
        selectBox.value = '10';
        document.getElementById("selection-box-msg-container").innerHTML = "9 is fully occupied please select another number"
    }
    else {
        document.getElementById("selection-box-msg-container").innerHTML = `You selected '${selectBox.value}'`;
    }
};
document.getElementById("selection-box-msg-container").onmouseover = function () {
    document.getElementById("selection-box-msg-container").style.backgroundColor = "orange";
}
document.getElementById("selection-box-msg-container").onmouseout = function () {
    document.getElementById("selection-box-msg-container").style.backgroundColor = "rgb(219, 170, 170)";
}



// Consider an array with name of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button the name of the programming language should be shown in a corresponding div. 
const programs = ['JAVA', 'PYTHON', 'JAVASCRIPT', 'C', 'TYPESCRIPT', "c++", "PHP", "Ruby", "SHELL SCRIPTING", "SQL"];
programs.forEach((value, index) => {
    const button = document.createElement('button');
    button.textContent = value;
    button.id = value;
    button.style.margin = '5px';
    document.getElementById('button-container').appendChild(button);
    button.onclick = function () {
        document.getElementById("show-language").textContent = value;
    }
}
)


// Make a form with fields name, phone number, place, company name, pin code
// if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.
// pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.
// Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 
// Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.
document.getElementById("form-details").onsubmit = function (event) {
    let formname = document.getElementById("name").value;
    let phonenumber = document.getElementById("phoneno").value;
    let placename = document.getElementById("place").value;
    let nameofcompany = document.getElementById("companyname").value;
    let pinnumber = document.getElementById("pincode").value;
    let text = "";
    let arrayformelements = [formname, phonenumber, placename, nameofcompany, pinnumber];
    let arrayofnumberelements = [phonenumber, pinnumber];
    arrayformelements.forEach((arrayelement, index) => {
        if (arrayelement == "") {
            text = "error:this field is required";
            event.preventDefault();
            let errormsgarray = ["name-error", "phoneno-error", "place-error", "companyname-error", "pincode-error"];
            document.getElementById(errormsgarray[index]).innerHTML = text;
        }
        else {
            arrayofnumberelements.forEach((numberelement, index) => {
                if (isNaN(numberelement)) {
                    event.preventDefault();
                    let errormsgarray = ["phoneno-error", "pincode-error"];
                    document.getElementById(errormsgarray[index]).innerHTML = "error : only numbers are allowed";
                }
                else if (index == 0 && numberelement.length < 10) {
                    let errormsgarray = ["phoneno-error", "pincode-error"]
                    event.preventDefault();
                    document.getElementById(errormsgarray[index]).innerHTML = "Minimum length of phone number should be 10";
                }
                else if (index == 1 && numberelement.length < 6) {
                    let errormsgarray = ["phoneno-error", "pincode-error"]
                    event.preventDefault();
                    document.getElementById(errormsgarray[index]).innerHTML = "Minimum length of Pin code should be 6";
                }
                else {
                    localStorage.setItem("fullname", formname);
                    localStorage.setItem("phone number", phonenumber);
                    localStorage.setItem("place name", placename);
                    localStorage.setItem("company name", nameofcompany);
                    localStorage.setItem("pin code", pinnumber);
                }

            })

        }
    })
};
document.getElementById("prepopulate").onclick = function (event) {
    event.preventDefault();
    document.getElementById("name").value = localStorage.getItem("fullname");
    document.getElementById("phoneno").value = localStorage.getItem("phone number");
    document.getElementById("place").value = localStorage.getItem("place name");
    document.getElementById("companyname").value = localStorage.getItem("company name");
    document.getElementById("pincode").value = localStorage.getItem("pin code");

}

// Create a form with a text field which when submitted, will change the tab title to whatever is entered, 
// limit the field to 50 characters, otherwise show error message, stay on the same page when submitted(it shouldn't refresh).
document.getElementById("tab-title-changing-form").onsubmit = function (event) {
    let newtitle = document.getElementById("tab-title").value;
    if (newtitle.length < 50) {
        document.title = newtitle;
        event.preventDefault();
    }
    else {
        event.preventDefault();
        document.getElementById("title-error").innerHTML = "the number of characters should be less than 50";
    }
}


// When control+enter key is pressed show an alert message. 
document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && event.ctrlKey) {
        alert('you pressed both ctrl and enter key');
    }
});
