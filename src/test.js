// let arr = [2,5,6,7,8,9,2,5,8,6,9]

// function FindDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const initialElement = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             const SecondElement = arr[j];
//             if (initialElement == SecondElement) {
//                 return SecondElement
//             }

//         }

//     } 
// }

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'Alice', country: 'USA' };

let finalObject = (obj1, obj2) => {
    return obj1 + obj2
}

console.log(finalObject);


