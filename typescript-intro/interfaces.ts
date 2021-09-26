interface Human {
    name: string;
    age: number;

    greet: () => void;
}

let lina: Human;
lina = {
    name: 'lina',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    name: string;
    age: number;
    greet(){
        console.log('Hello!');
    }
}
