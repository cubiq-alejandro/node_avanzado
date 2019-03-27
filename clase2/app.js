const getPeople = (id) => {
    return fetch(`https://swapi.co/api/people/${id}`)
    .then(response => response.json())
}

const ids = [1,2,3,4,5,6,7,8,9,10]
let promises = ids.map(id => getPeople(id))

Promise
.all(promises)
.then( personajes => {
    personajes.forEach( personaje => {
        console.log(`El personaje es ${personaje.name}`)
    })
})

/*
getPeople(1)
.then( people => {
    console.log(people.name)
    return getPeople(2)
})
.then( people => {
    console.log(people.name)
    return getPeople(3)
})
.then( people => {
    console.log(people.name)    
})*/