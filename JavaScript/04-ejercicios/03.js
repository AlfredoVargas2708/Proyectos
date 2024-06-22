function getbyIdx(arr, idx) {
    if (idx >= arr.length || idx < 0) {
        return 'El índice no es válido';
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2], 1);
console.log(resultado);