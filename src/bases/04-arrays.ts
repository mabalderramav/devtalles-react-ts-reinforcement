const array: number[] = [1, 2, 3, 4, 5];
array.push(6, 7, 8);


const array2: string[] = ['a', 'b', 'c', 'd', 'e'];
array2.push('f', 'g', 'h');

const array3 = [... array]
array3.push(9, 10, 11);

const array4 = structuredClone(array);
array4.push(12, 13, 14);

console.log(array);
console.log(array2);
console.log({array, array2, array3, array4});
