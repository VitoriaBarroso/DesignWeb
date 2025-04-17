
const listanumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//slice (0,5) = [1,2,3,4,5] // 0 = inicio do array e 5 = fim do array   
const parte = listanumerica.slice(0, 5); // [1, 2, 3, 4, 5]    

listanumerica[1] = 20; // [1, 20, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listanumerica)
console.log(parte)