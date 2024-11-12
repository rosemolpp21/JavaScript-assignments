document.getElementById("prepopulate").disabled = true;
document.getElementById("form-details").onsubmit = function (event) {
    event.preventDefault();
    let formname = document.getElementById("name").value.trim();
    let phonenumber = document.getElementById("phoneno").value.trim();
    let placename = document.getElementById("place").value.trim();
    let nameofcompany = document.getElementById("companyname").value.trim();
    let pinnumber = document.getElementById("pincode").value.trim();
    let errormsgarray = ["name-error", "phoneno-error", "place-error", "companyname-error", "pincode-error"];
    let arrayformelements = [formname, phonenumber, placename, nameofcompany, pinnumber];
    let arrayofnumberelements = [phonenumber, pinnumber];
    let Valid = true;
    errormsgarray.forEach(errorId => document.getElementById(errorId).innerHTML = "");
    arrayformelements.forEach((arrayelement, index) => {
        if (arrayelement == "") {
            document.getElementById(errormsgarray[index]).innerHTML = "error: this field is required";
            Valid = false;
        }
    });
    if (!isNaN(phonenumber)) {
        if (phonenumber.length < 10) {
            document.getElementById("phoneno-error").innerHTML = "Minimum length of phone number should be 10";
            Valid = false;
        }
    } else {
        document.getElementById("phoneno-error").innerHTML = "error: only numbers are allowed";
        Valid = false;
    }

    if (!isNaN(pinnumber)) {
        if (pinnumber.length < 6) {
            document.getElementById("pincode-error").innerHTML = "Minimum length of Pin code should be 6";
            Valid = false;
        }
    } else {
        document.getElementById("pincode-error").innerHTML = "error: only numbers are allowed";
        Valid = false;
    }

    if (Valid) {
        localStorage.setItem("fullname", formname);
        localStorage.setItem("phone number", phonenumber);
        localStorage.setItem("place name", placename);
        localStorage.setItem("company name", nameofcompany);
        localStorage.setItem("pin code", pinnumber);
        document.getElementById("prepopulate").disabled = false;
    }
};
document.getElementById("prepopulate").onclick = function (event) {
    event.preventDefault();
    document.getElementById("name").value = localStorage.getItem("fullname");
    document.getElementById("phoneno").value = localStorage.getItem("phone number");
    document.getElementById("place").value = localStorage.getItem("place name");
    document.getElementById("companyname").value = localStorage.getItem("company name");
    document.getElementById("pincode").value = localStorage.getItem("pin code");
};

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
