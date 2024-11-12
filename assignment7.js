// Create a JSON file, that should contain the following data and use AJAX to load data from a JSON file .
// Display each item in a card format on the HTML page. Each card should show the name, description, price of the item, the general description from the JSON file at the top of the card section, the metadata information (author and creation date) at the bottom of the card section.
// Convert the creation date format from "YYYY-MM-DD" to a more readable format, such as "January 10, 2024"(don't hardcode it)
const myrequest = new XMLHttpRequest();
myrequest.open("GET", "../example.json");
myrequest.onload = function () {
    const data = JSON.parse(myrequest.responseText);
    const maindescription = data.description;
    const maindiv = document.createElement("div");
    maindiv.id = "maindiv";
    maindiv.className = "main-card";
    document.body.appendChild(maindiv);
    const totalItemList = document.getElementById("total-items");
    totalItemList.innerHTML = `<h1>${maindescription}</h1>`;
    totalItemList.style.maxWidth = "600px";
    totalItemList.style.border = "2px solid grey";
    data.items.forEach((element) => {
        const cardcontainer = document.createElement("div");
        cardcontainer.className = "card-set";
        cardcontainer.id = element.name + "card";
        cardcontainer.innerHTML = `Name: ${element.name}<br>Description: ${element.description}<br>Price: ${element.price}<br><br>`;
        totalItemList.appendChild(cardcontainer);
    });
    const extraaddeditem = document.createElement("div");
    totalItemList.appendChild(extraaddeditem);
    
    // Write a function to retrieve and display the author and creation date from the nested metadata object in the JSON file.
    const authoranddate = document.createElement("div");
    const date = new Date(data.metadata.creationDate).toLocaleDateString(
        "en-us",
        { year: "numeric", month: "long", day: "numeric" }
    );
    authoranddate.innerHTML = `<h2>Author : ${data.metadata.author} <br> Date of Creation: ${date}<h2>`;
    totalItemList.appendChild(authoranddate);


    // Write a JavaScript function to filter items in the array based on price (e.g., show only items over $500).
    const over500 = data.items.filter((k) => k.price > 500);
    const over500itemstext = document.createElement("div");
    over500itemstext.innerHTML = `<h1>Items over 500`;
    maindiv.appendChild(over500itemstext);
    over500.forEach((element) => {
        const over500items = document.createElement("div");
        over500items.className = "itemsover500";
        over500items.id = element.name + "card";
        over500items.innerHTML = `Name: ${element.name}<br>Description: ${element.description}<br>Price: ${element.price}<br><br>`;
        maindiv.appendChild(over500items);
    });
    console.log(over500);


    // Create a function to sort the array of items by name or price in ascending or descending order.
    const sortPriceInAscendingOrder = data.items.sort(
        (a, b) => a.price - b.price
    );
    const itemsInAscending = document.createElement("div");
    itemsInAscending.innerHTML = `<h1>Items in Ascending order`;
    maindiv.appendChild(itemsInAscending);
    sortPriceInAscendingOrder.forEach((element) => {
        const sortPriceInAscendingOrderdiv = document.createElement("div");
        sortPriceInAscendingOrderdiv.className = "itemsover500";
        sortPriceInAscendingOrderdiv.id = element.name + "card";
        sortPriceInAscendingOrderdiv.innerHTML = `Name: ${element.name}<br>Description: ${element.description}<br>Price: ${element.price}<br><br>`;
        maindiv.appendChild(sortPriceInAscendingOrderdiv);
    });
    console.log(sortPriceInAscendingOrder);


    // Create a simple form (also add validation) to add a new items to the items array and display it immediately in the card section.
    const form1 = document.getElementById("myform");
    form1.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameofitem = document.getElementById("itemname").value.trim();
        const descriptionitem = document.getElementById("itemdesc").value.trim();
        const priceofitem = Number(
            document.getElementById("itemprice").value.trim()
        );
        document.getElementById("error-msg").innerHTML = "";
        let valid = true;
        if (isNaN(priceofitem) || priceofitem <= 0) {
            document.getElementById("error-msg").innerHTML =
                "Price should be a positive number.";
            valid = false;
        }
        if (valid) {
            let datatosend = {
                name: nameofitem,
                description: descriptionitem,
                price: priceofitem,
            };
            console.log(JSON.stringify(datatosend));
            data.items.push(datatosend);
            const newaddedelements = document.createElement("div");
            newaddedelements.className = "newelements";
            newaddedelements.id = datatosend.name;
            newaddedelements.innerHTML = `Name: ${datatosend.name}<br>Description: ${datatosend.description}<br>Price: ${datatosend.price}<br><br>`;
            extraaddeditem.appendChild(newaddedelements);
            document.getElementById("myform").reset();
        }
    });
    // Write a function to retrieve and display the author and creation date from the nested metadata object in the JSON fil
};
myrequest.send();
