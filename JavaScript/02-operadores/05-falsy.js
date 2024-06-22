// short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// Nan

let nombre = 'Chanchito feliz';
let username = nombre || 'Anónimo'
console.log(username);

function fn1() {
    console.log('Soy función 1');
    return false;
}

function fn2() {
    console.log('Soy función 2');
    return true;
}

let x1 = fn1() && fn2()


