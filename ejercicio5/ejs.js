const myMap=new Map()

const firstUser={
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    profession: "Barro man",
}

const secondUser = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
};

const thirdUser = {
    name: "Álvaro",
    last: "Morón",
    age: 31,
    nationality: "España",
};

const color='blue'

myMap.set('moroso',firstUser)
myMap.set('agarrado',secondUser)
myMap.set('generoso',thirdUser)
myMap.set('funcion',()=>findAnimal())
myMap.set('color',color)

console.log(myMap)

const key=Object.values(myMap.get('moroso'))
const keyExists = myMap.has('hola')
console.log(keyExists)
console.log(key)
console.log(myMap.size)

myMap.forEach((value,key)=>{
    console.log(value,key)
})

myMap.delete('generoso')

myMap.clear()