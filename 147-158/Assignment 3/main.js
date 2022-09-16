// Edit The Class
class User {
    #c;
    static regEx = /(\d{4}-){3}\d{4}/g;
    constructor(username, card) {
        this.u = username;
        this.#c = card.toString();
    }
    get showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${(this.#c).match(User.regEx) || (this.#c).replace((this.#c),((this.#c).slice(0,4)+'-'+(this.#c).slice(4,8)+'-'+(this.#c).slice(8,12)+'-'+(this.#c).slice(12)))}`;
    }
            
        
    //return `// Hello ${this.u} Your Credit Card Number Is 1234-5678-1234-5678`
}



// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined