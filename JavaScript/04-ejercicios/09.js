let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: 'Felipe'
}, {
    id: 3,
    name: 'Chanchito'
}]

function toPairs(arr) {
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx]
        pares[idx] = [elemento.id, elemento];
    }
    return pares;
}

let resultado = toPairs(array);


function toCollection(arr) {
    let collection = [];
    for(idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0]
    }
    return collection;
}

let resultadoCollection = toCollection(resultado);
console.log(resultadoCollection);