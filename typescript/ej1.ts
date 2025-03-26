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
const dog: Dog = {
    name: "Buddy",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Husky",
    age: 3   
};
