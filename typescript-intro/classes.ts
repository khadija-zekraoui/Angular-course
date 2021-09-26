class Client {
    // firstName: string;
    // lastName: string;
    // age: number;
    // isVIP: boolean;
    // private hobbies: string[];

    // constructor(firstName: string, lastName: string, age: number, isVIP: boolean, hobbies: string[]) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.isVIP = isVIP;
    //     this.hobbies = hobbies
    // }

    constructor( //shorthand notation
        public firstName: string,
         public lastName: string, 
         public age: number, 
         public isVIP: boolean, 
         private hobbies: string[]
    ) {}

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    listHobbies() {
        return this.hobbies.slice(); // slice() to not sending the original array but a copy
    }
}

const client = new Client('Lina', 'Luna', 25, false, ['cooking', 'sports']);
client.addHobby('learning');
console.log(client.listHobbies);

