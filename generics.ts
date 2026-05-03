// ==========================================
// 11. GENERICS: THE BASICS
// ==========================================

// Two ways to write arrays. These do the exact same thing!
const score: Array<number> = []; // Generic syntax
const names: string[] = [];      // Standard syntax

// BAD: Hardcoding types. What if we want to pass a string later? 
function identityOne(val: boolean | number): boolean | number {
    return val;
}

// WORSE: Using 'any' destroys TypeScript's powers. It accepts anything 
// but also forgets what it accepted, returning 'any'.
function identityTwo(val: any): any {
    return val;
}

// GOOD: Generics! '<Type>' acts like a variable for the type. 
// If you pass a string in, 'Type' becomes 'string', and it strictly returns a 'string'.
function identityThree<Type>(val: Type): Type {
    return val;
}

// BEST PRACTICE: Usually, developers just use a single capital letter, like 'T'.
function identityFour<T>(val: T): T {
    return val;
}

// ==========================================
// 12. GENERICS WITH CUSTOM TYPES (INTERFACES)
// ==========================================

interface Bottle {
    name: string;
    date: Date; // Expects a Date object
}

// We can pass our custom 'Bottle' interface into our Generic function.
// Note: I changed Date.now() to new Date(), because Date.now() outputs a number!
identityFour<Bottle>({ name: "Bisleri", date: new Date() });


// ==========================================
// 13. GENERICS WITH ARRAYS & ARROW FUNCTIONS
// ==========================================

// Takes an array of type T, and returns a single item of type T.
function getSearchedProduct<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

// THE REACT GOTCHA: When writing an arrow function in a .tsx (React) file, 
// <T> looks exactly like an HTML/JSX tag. To tell TypeScript "this is a generic, 
// not a UI component", we add a comma: <T,>
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}


// ==========================================
// 14. GENERIC CONSTRAINTS (The 'extends' keyword)
// ==========================================

interface Database {
    connection: string;
    username: string;
    password: string;
}

// Here, T can be absolutely anything. 
// BUT, U is constrained. The 'extends Database' means U *must* be an object 
// that contains at least a connection, username, and password.
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}

// This would throw an error because the second argument is an empty object {}, 
// and doesn't meet the 'Database' requirements!
// anotherFunction(3, {}) 


// ==========================================
// 15. GENERIC CLASSES
// ==========================================

interface Quiz { name: string; type: string; }
interface Course { name: string; author: string; subject: string; }

// We can make an entire class generic. 
// When we create a new Sellable, we tell it what 'T' is (e.g., a Quiz or a Course).
class Sellable<T> {
    public cart: T[] = [];

    // Now, you can only add items to the cart that match type 'T'
    addToCart(product: T) {
        this.cart.push(product);
    }
}