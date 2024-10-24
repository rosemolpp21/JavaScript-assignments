//Create variables with different data types available in JS and print their data types along with each variable name in the console. 

let variable1 = 20;
console.log("variable1 is", typeof variable1, "type");
let variable2 = false;
console.log("variable2 is", typeof variable2, "type");
let variable3 = 20.45;
console.log("variable3 is", typeof variable3, "type");
let variable4 = "hai";
console.log("variable4 is", typeof variable4, "type");
let variable5 = { name: "Rose", age: "23" };
console.log("variable5 is", typeof variable5, "type");
let variable6 = [1, 2, 3, 4, 5];
console.log("variable6 is", typeof variable6, "type");
let variable7 = null;
console.log("variable7 is", typeof variable7, "type");
let variable8
console.log("variable8 is", typeof variable8, "type");

//Write a JS program to show an alert message on the loading of the website.

alert("hello welcome to my page")

//["1", "2", "3", "4", "5", "6", "7"]
// Remove number "6" from the array and console the length of the array.

let arr = ["1", "2", "3", "4", "5", "6", "7"];
arr.splice(arr.indexOf("6"), 1);
console.log(arr);
console.log(arr.length);

//Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
let arr2 = ["1", "2", "3", "4", "5", "6", "7"];
for (let i = 0; i <= arr2.length - 1; i++) {
    arr2[i] = Number(arr2[i]);
    console.log(typeof arr2[i]);
}
console.log(arr2);

//Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
let arr3 = ["1", "2", "3", "4", "5", "6", "7"];
arr3.splice(arr3.length - 3, 3);
console.log(arr3.length);
console.log(arr3);
arr3.splice(0, -2, "one", "two");
console.log(arr3);

//Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)


let arr4 = ["1", "2", "3", "4", "5", "6", "7"];
var sum = 0;
for (let i = 1; i <= arr4.length - 1; i++) {
    if (i == 1) {
        var k = arr4[i - 1] + arr4[i];
    }
    else {
        k = k + arr4[i];
    }

    sum = Number(arr4[i]) + sum;
}
console.log(k, "is the final string got by concatenate all the elements from the array");
console.log(sum, "is the sum of elements in given array");



//Filter out item "3" from the array and console the array (use array method)

let arr5 = ["1", "2", "3", "4", "5", "6", "7"];
arr5 = arr5.filter(item => item != "3");
console.log(arr5);





//Iterate the array and console the item, when item is either "3", "6" or "7"
let arr6 = ["1", "2", "3", "4", "5", "6", "7"];
for (let i = 0; i <= arr6.length - 1; i++) {
    if (arr6[i] == "3" || arr6[i] == "6" || arr6[i] == "7") {
        console.log(arr6[i]);
    }
}




//[1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
let arr7 = [1, 2, "3", 4, 5, 6, "7"];
for (i = 0; i <= arr6.length - 1; i++) {
    for (j = 0; j <= arr7.length - 1; j++) {
        if (typeof arr6[i] == typeof arr7[j]) {
            console.log("element", arr6[i], "with indexnumber", i, "and", "element", arr7[j], "with indexnumber", j, " are of same datatype")
        }
    }
}

//[0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
let arr8 = [0, 2, 3, 7, 5, 6, 8];
for (i = 0; i <= arr8.length - 1; i++) {
    let k = arr8[i] * i;
    if (k == 40) {
        console.log("result is equal to 40");
    }
    else {
        console.log(k);
        console.log(arr8[i], "*", i, "not equal to 40");
    }

}
//Create two arrays with five items each and merge the array into a single array and then console it.
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr10 = ["a", "b", "c", "d", "e", "f"];
arr10 = arr10.concat(arr9);
console.log(arr10);