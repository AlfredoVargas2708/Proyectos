let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let mayor = 0;
    let menor = 0;
    for(num of array){
        if(mayor < num){
            mayor = num
        }
        if(menor > num){
            menor = num
        }
    }
    return {
        menor: menor,
        mayor: mayor
    }
}

let numeros = getMenorMayor(array)
console.log(numeros);