async function fetchApiPokemon() {

    const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const response = await data.json()
    return response

}


console.log('Cargando datos...')
setTimeout(() => {
   
    fetchApiPokemon().then((response) => {
        console.log(response)
    }).catch(error => {
        throw new Error('Error al cargar los datos', error)
    })
}, 2000)
