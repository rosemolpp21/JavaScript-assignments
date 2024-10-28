//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// ​Console this star pattern
for (let i = 1; i <= 5; i++) {
    console.log(' '.repeat(5 - i) + ' *'.repeat(i));
}
// ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.
let k = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
k.map(item => {
    switch(item) {
        case 'car':
            console.log(item);
            break;
        case 1:
            console.log(item);
            break;
        case 5:
            console.log(item);
            break;
        case 'js':
            console.log(item);
            break;
        case 'node js':
            console.log(item);
            break;
        case 'mysql':
            console.log(item);
            break;
        default:
            console.log(item);
    }
});
// [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
let arr = [1, 2, 3, 4, 5, 6];
function a(arr) {
    return function() {
        arr.splice(5, 1);
        arr.splice(2, 1);
        return arr;
    };
}
console.log(a(arr)());
// Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
class arrays{
    constructor(array) {
        this.array = array;
    }
    printelements(){
        this.array.forEach(element => console.log(element));
    }
}
let array = [1, 2, 3, 4, 5, 6];
let print = new arrays(array);
print.printelements();
//Create a self-invoking function to console you name.
(function(){
    console.log("Rosemol P P");
})()



