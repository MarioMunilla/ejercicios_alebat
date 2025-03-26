type Bird= {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    canFly: boolean;
}

interface Dog extends Bird {
    race: string | "Husky" | "Labrador" | "Chucho";
    age: number;
}

interface Cat extends Pick<Bird,"name"| "canSleep">{
    color:string
}

interface Snake extends Pick<Bird,"canEat"| "canDrink" |"canSleep">{}


const dog: Dog = {
    name: "Buddy",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Husky",
    age: 3   
};
