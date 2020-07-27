const verifyProfesion = require('./node_modules/professionValidate/verifyProfesion').verifyProfesion;

const usuarios = [
    { id: 1, nombre: 'ricardo', profesion_id: 1 },
    { id: 2, nombre: 'alejandro', profesion_id: 1 },
    { id: 3, nombre: 'diego', profesion_id: 2 },
]

const profesion = {
    1: 'programador',
    2: 'diseñador'
}

function getUsuarios() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(usuarios)
        }, 200)
    })

}

function getUsuario(id) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(usuarios.filter((usuario) => usuario.id === id)[0])
        }, 200)
    })
}

function getProfesion(id) {
    return new Promise((resolved, reject) => {
        if (id) {
            setTimeout(() => {
                resolved(profesion[id])
            }, 200)
        } else {
            reject('No se paso el ID Profesion')
        }

    })
}

// getUsuarios()
//     .then((usuarios) => getUsuario(usuarios[1].id))
//     .then((usuario) => getProfesion(usuario.profesion_id))
//     .then((profesion) => {
//         console.log('La profesion de alejandro es:' + profesion)
//     })

// getProfesion().then((profesion) => {
//     console.log(profesion)
// })
//     .catch((err) => {
//         console.error(err)
//     })

getUsuarios()
    .then((usuarios) => getUsuario(usuarios[1].id))
    .then((usuario) => getProfesion(usuario.profesion_id))
    .then((profesion) => {
        verifyProfesion(profesion)
            .then(() => {
                console.log('La profesion de alejandro es:' + profesion)
            })

    })




