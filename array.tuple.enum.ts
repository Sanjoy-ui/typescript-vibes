// ==========================================
// 22. ARRAYS (Deep Dive)
// ==========================================

// The two standard ways to type an array (they do the exact same thing)
const superHeros: string[] = [];
const heroPower: Array<number> = [];

// Arrays of Custom Objects
type UserItem = {
    name: string;
    isActive: boolean;
}
const allUsers: UserItem[] = [];
allUsers.push({ name: "Sanjoy", isActive: true });

// Multi-Dimensional Arrays (Arrays inside Arrays)
// Useful for things like RGB color matrices or grids
const MLModels: number[][] = [
    [255, 255, 255],
    [0, 0, 0]
];


// ==========================================
// 23. TUPLES (Strict Order & Strict Length)
// ==========================================
// A Tuple is an array where the TYPE, ORDER, and LENGTH are strictly enforced.

// We want an array that is exactly: [string, number, boolean]
let tUser: [string, number, boolean];

// CORRECT:
tUser = ["sanjoy", 131, true];

// INCORRECT (Wrong order):
// tUser = [true, 131, "sanjoy"]; // <-- ERROR

// INCORRECT (Wrong length):
// tUser = ["sanjoy", 131, true, "extraData"]; // <-- ERROR

// Useful for RGB values or coordinates where order matters entirely
let rgb: [number, number, number] = [255, 123, 112];

// THE TUPLE GOTCHA: Array Methods
// Historically, TypeScript couldn't stop you from using .push() or .pop() to alter 
// a tuple's length after it was created. To truly lock it down, use 'readonly'.
let strictUser: readonly [string, number] = ["sanjoy", 25];
// strictUser.push("hacker"); // <-- ERROR: Property 'push' does not exist on type 'readonly [string, number]'.


// ==========================================
// 24. ENUMS (Enumerations)
// ==========================================
// Enums allow you to define a set of named constants. Perfect for 
// things like order statuses, user roles, or directions.

// By default, Enums assign numbers starting at 0.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

// You can change the starting number, and the rest will follow.
enum StatusCodes {
    NotFound = 404,
    ServerError = 500,
    Created = 201,     
    Accepted           // TS automatically makes this 202
}

// STRING ENUMS (Highly Recommended)
// These are easier to debug because the value is a readable string, not just a number.
enum SeatChoice {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE",
    WINDOW = "WINDOW",
}

const mySeat = SeatChoice.AISLE; 

// THE CONST ENUM OPTIMIZATION
// Standard Enums generate a LOT of ugly JavaScript code behind the scenes.
// Adding 'const' tells TypeScript to just output the raw value when it compiles, 
// saving bundle size and keeping your compiled code clean.
const enum AirplaneSeat {
    FIRST_CLASS = "FIRST",
    BUSINESS = "BUSINESS",
    ECONOMY = "ECONOMY"
}
const myTicket = AirplaneSeat.BUSINESS; // Compiles simply to: const myTicket = "BUSINESS";