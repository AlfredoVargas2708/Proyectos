function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando Clave');
        },
    };
}

let user1 = crearUsuario('Alfredo', 'avg072023@gmail.com')
let user2 = crearUsuario('Felipe', 'felipe@gmail.com')

console.log(user1);
console.log(user2);