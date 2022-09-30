// let array = ["hello",18,true];

// console.log(array); // ['hello', 18, true]

// console.log(array[0]); // hello
// console.log(array[1]); // 18
// console.log(array[2]); // true


// let arr = ["Shahrom" , "Faridun" , "Islom"];

// console.log(arr); // ["Shahrom" , "Faridun" , "Islom"]

// arr.push("Ali")

// console.log(arr); // ['Shahrom', 'Faridun', 'Islom', 'Ali']



// let arr = ["Shahrom" , "Faridun" , "Islom"];

// console.log(arr); // ["Shahrom" , "Faridun" , "Islom"]

// arr.unshift("Ali")

// console.log(arr); // ['Ali', 'Shahrom', 'Faridun', 'Islom']



// let arr = ["Shahrom" , "Faridun" , "Islom"];

// console.log(arr); // ["Shahrom" , "Faridun" , "Islom"]

// arr.pop();

// console.log(arr); // ['Shahrom', 'Faridun']



// let arr = ["Shahrom" , "Faridun" , "Islom"];

// console.log(arr); // ["Shahrom" , "Faridun" , "Islom"]

// arr.shift();

// console.log(arr); //  ['Faridun', 'Islom']



// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6,7 ,8 ,9 ,10];
// let arr2 = arr.concat(arr1, 11, 12)
// console.log(arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



// let arr = ["Shahrom" , "Faridun" , "Islom", "Shahrom"];

// console.log(arr.indexOf("Shahrom"));  // 0

// console.log(arr.indexOf("Shahrom", 2)); // 3



// let arr = ["Shahrom" , "Faridun" , "Islom"];

// console.log(arr.includes("Shahrom"));  // true

// console.log(arr.includes("Shahrom", 2)); // false



// let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim"];
// let arr2 = arr;
// console.log(arr2.slice(1,3));  //  ['Faridun', 'Islom']

// console.log(arr.slice(-1)); // ['Rahim']



// let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim", "Anis"];

// arr.splice(1,2);
// console.log(arr);  //  ['Shahrom', 'Rahim', 'Anis']

// let arr2 = ["Faridun" , "Islom", "Rahim", "Anis"];

// arr2.splice(2, 0, "Mansur");
// console.log(arr2);  // ['Faridun', 'Mansur', 'Islom', 'Rahim', 'Anis']



// let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim", "Anis"];

// console.log(arr.sort()); // ['Anis', 'Faridun', 'Islom', 'Rahim', 'Shahrom']

// let arr2 = [1, 8, 25];

// console.log(arr2.sort()); // [1, 25, 8]

// console.log("25" < "8"); // true




// let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim", "Anis"];

// console.log(arr.reverse());// ['Anis', 'Rahim', 'Islom', 'Faridun', 'Shahrom']




// let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim", "Anis"];

// console.log(arr.length); // 5



let arr = ["Shahrom" , "Faridun" , "Islom", "Rahim", "Anis"];

console.log(arr.join(" ")); // Shahrom Faridun Islom Rahim Anis
