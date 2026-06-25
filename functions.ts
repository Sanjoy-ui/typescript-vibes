// ==========================================
// 1. BASIC TYPES (Numbers, Strings, Booleans)
// ==========================================

// Takes a number as input, and strictly returns a number.
function addTwo(num: number): number {
    return num + 2;
}

// Takes a string as input, and strictly returns a string.
function toUpper(name: string): string {
    return name.toUpperCase();
}


// Note: If a function doesn't return anything, TS infers 'void'.
function signUpUser(email: string, name: string, password: string, age: number) {
    // Signup logic would go here
}

// Takes a number, strictly returns a boolean (true or false).
function checkTrue(num: number): boolean {
    if (num > 5) {
        return true;
    }
    // return "200 ok"; // <-- TS would throw an error here because "200 ok" is a string, not a boolean!
    return false;
}

// ==========================================
// 2. ARROW FUNCTIONS & ARRAYS
// ==========================================

// TypeScript automatically infers this is an array of strings: string[]
const heros = ["thor", "spiderman", "ironman"];

// We can type the return value of an arrow function inside a map.
// The ': string' after (item) ensures this map strictly returns strings.
heros.map((item): string => {
    return `Hero: ${item}`; 
});

// ==========================================
// 3. VOID vs. NEVER
// ==========================================

// 'void' is used when a function completes normally, but returns NOTHING.
// Use this for functions that just log things or update the DOM.
function consoleErr(error: string): void {
    console.log(error);
}

// 'never' is used when a function NEVER finishes its execution normally.
// Use this for functions that throw errors or have infinite while(true) loops.
function handleError(error: string): never {
    throw new Error(error);
}
