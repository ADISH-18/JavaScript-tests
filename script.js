//quick sort in an array
let arr = [10, 4, 6, 5, 3, 8, 20];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
console.log("Quick sort for array=[10, 4, 6, 5, 3, 8, 20]");
console.log(quickSort(arr));

//selection sort in an array
let array = [10, 4, 6, 5, 3, 8, 20, 15, 13, 19];
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
console.log("selection sort for array=[10, 4, 6, 5, 3,8,20,15,13,19]");
console.log(selectionSort(array));

//array destructing
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, c, d, e, f, g, h, i, j] = array1;
console.log(a, b, c, d, e, f, g, h, i, j);

//array mapping
let arrray2 = [1, 2, 3, 4, 5, 6, 7, 8];
let res = arrray2.map((item) => item * 2);
console.log("Original array=[1,2,3,4,5,6,7,8]");
console.log(res);

//sorting an array elements using sort() and reverse()
let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("original array", array3);
console.log("sorted array", array3.sort());
console.log("sorted array in reverse order", array3.sort().reverse());

//array spreading
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [k, l, m, n, o, p, q, r, s, t] = array4;
console.log(a, b, c, d, e, f, g, h, i, j);

// flattening an array
let array5 = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
console.log("original array", array5);
console.log("flattened array", array5.flat(2));

//array of objects sorting
let array6 = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 20 },
    { name: "Radha", age: 20 }
];
console.log("original array", array6);
console.log("sorted array", array6.sort((a, b) => a.age - b.age));

//creating anew array from user given size
let size = Number(prompt("Enter the size of The Array"));
let array7 = new Array(size);
for (let i = 0; i < size; i++) {
    array7[i] = Number(prompt("Enter the elements of the array"));
}
console.log(array7);

//merging the arrays
let array8 = [1, 2, 3, 4, 5];
let merger = [6, 7, 8, 9, 10];
let merged = [...array8, ...merger];
console.log("The input arrays are array1=[1,2,3,4,5] array2=[6,7,8,9,10]");
console.log(merged);

//array deduplication
let array9 = [1, 2, 3, 3, 4, 5, 2, 3, 4, 6, 5, 7];
console.log("original array", array9);
console.log("deduplicated array", [...new Set(array9)]);

// array joining and splitting using join() and split()
let array10 = "Hello,how are you?";
console.log("original array", array10);
console.log("split array", array10.split(","));

//find a specific element in an array
let arraysize = Number(prompt("Enter the size of the array"));
let array11 = new Array(arraysize);
for (i = 0; i < arraysize; i++) {
    array11[i] = Number(prompt("Enter the elements of the array"));
}
console.log("original array", array11);
let targetElement = Number(prompt("Enter the number to find the index"));
let index = array11.indexOf(targetElement);
console.log(targetElement + " found at index: " + index);
