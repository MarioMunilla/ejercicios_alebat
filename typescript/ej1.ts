interface Animal {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
}
type Bird = Animal & {
    canFly: boolean;
}

type Dog = Animal & {
    race: "Husky" | "Labrador" | "Chucho";
    age: number;
}


type Cat = Pick<Bird, "name" | "canSleep"> & {
    color: string
}

type Snake = Pick<Bird, "canEat" | "canDrink" | "canSleep"> & {}

const cat:Cat={
    name:'Edu',
    color:'blanco',
    canSleep:true

}
const snake:Snake={
    canSleep: true,
    canEat: true,
    canDrink: false
}

const dog: Dog = {
    name: "Buddy",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "Husky",
    age:2 
};
