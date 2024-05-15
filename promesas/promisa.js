let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNumero = Math.floor(Math.random() * 10)
        console.log('randomNumero:', randomNumero)
        if (randomNumero % 2 == 0) {
            resolve('La promesa se resolvió exitosamente')
        } else {
            reject('La promesa NO se resolvió exitosamente')
        }
    }, 2000);
})

console.log('promesa:', promesa)

promesa.then((resultado) => {
    console.log('resultado:', resultado)
}, (error) => {
    console.error('error:', error)
})