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

function getUsuarios(callback) {
    setTimeout(() => {
        callback(null, usuarios)
    }, 200)
}

function getUsuario(id, callback) {
    setTimeout(() => {
        callback(null, usuarios.filter((usuario) => usuario.id === id)[0])
    }, 200)
}

function getProfesion(id, callback) {
    setTimeout(() => {
        callback(null, profesion[id])
    }, 200)
}

getUsuarios((err, usuarios) => {
    if (err) return console.log(err)
    const alejandroId = usuarios[1].id
    getUsuario(alejandroId, (err, usuario) => {

        const profesionId = usuario.profesion_id;

        getProfesion(profesionId, (err, profesion) => {
            console.log('La profesion de alejandro es:' + profesion)
        })
    })
})

function getProfesion(id, callback) {
    setTimeout(() => {
        callback(null, profesion[id])
    }, 200)
}

// getUsuarios((err, usuarios) => {
//     const alejandroId = usuarios[1].id
//     getUsuario(alejandroId, (err, usuario) => {

//         const profesionId = usuario.profesion_id;
//         verifyProfesion(profesionId, (err) => {
//             if (err) {
//                 console.error(err)
//             } else {
//                 getProfesion(profesionId, (err, profesion) => {
//                     console.log('La profesion de alejandro es:' + profesion)
//                 })
//             }

//         })

//     })
// })

