// {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
const object1 = { a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one' };
let array = [];
for (let i in object1) {
    array.unshift(i);
}
console.log(array);


// { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )
let object2 = { data: [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' }, { a: 'five', id: '212' }] }
object2 = object2.data.filter(item => item.id != "24");
console.log(object2);


// Write a function to 
// Calculate the height of the end user's browser screen
console.log(window.innerHeight);


// To console the name of the web host
console.log(location.hostname);


// To show a warning message if there is no https protocol used in the visited website.
if (location.protocol == 'https') {
    alert("site you visited is secure");
}
else {
    alert("warning ! visited site is not secure");
    console.log("warning ! visited site is not secure")
}


// To show an alert message after 10sec while the page is refereshed.
setTimeout(function () {
    alert("hi, this is an alert message ! 10 seconds completed after refreshed");
}, 10000);


// Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 
let basicdetails = { name: "rose", place: "Thrissur", Email: "123@gmail.com" }
localStorage.setItem("details", JSON.stringify(basicdetails));
console.log(JSON.parse(localStorage.getItem("details")));
setTimeout(function () {
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem("details")));
}, 60000);


// Redirect to the homepage of google from the console.
window.open("https://www.google.com/");
// location.href="https://www.google.com/";