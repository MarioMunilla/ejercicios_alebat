/** Primer código */
const firstUser = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    profession: "Barro man",
};

function nameUser(firstUser) {
    let { name, last } = firstUser
    const fullName = "Me llamo " + name + " " + last;
    return fullName;
}

console.log(nameUser(firstUser));

/** Segundo código */
const secondUser = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
};

function userData(secondUser) {
    let { name, last, salary } = secondUser
    const annualSalary = salary * 12;
    const fullName = `${name} ${last}`;
    return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(secondUser));


const thirdUser = {
    name: "Álvaro",
    last: "Morón",
    age: 31,
    nationality: "España",
};

function isCanTakeHelps(thirdUser) {
    let { nationality, age } = thirdUser
    if (nationality !== 'España' && age === 30) {
        return true
    }
    return false
}
function isForeign(thirdUser) {
    if (isCanTakeHelps(thirdUser)) {
        return "Apto para la ayuda del gobierno"
    }
    return "No apto para la ayuda del gobierno";
}

console.log(isForeign(thirdUser));