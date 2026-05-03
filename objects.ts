// ==========================================
// 4. OBJECTS & THE "EXCESS PROPERTY" GOTCHA
// ==========================================

const simpleUser = {
    name: "sanjoy",
    email: "hsanjoy@gmail.com",
    isActive: true
};

// This function expects an object with exactly two specific properties.
function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {
    // ...
}

// THE GOTCHA: 
let newUser = { name: "rahul", isPaid: false, email: "san.com" };

// If you pass the variable `newUser`, TypeScript allows it! 
// It checks if name and isPaid exist, and ignores the extra 'email' property.
createUser(newUser); 

// BUT, if you tried to pass that exact same object DIRECTLY, it would throw an error:
// createUser({ name: "rahul", isPaid: false, email: "san.com" }) // <-- ERROR: Object literal may only specify known properties.


// ==========================================
// 5. TYPE ALIASES (Creating your own types)
// ==========================================

// Instead of writing out object types every time, we create a reusable "Type Alias".
type BasicUser = {
    name: string;
    email: string;
    isActive: boolean;
}

// Now we can use 'BasicUser' as both the input requirement AND the return requirement.
function createBasicUser(user: BasicUser): BasicUser {
    return { email: user.email, name: user.name, isActive: user.isActive };
}


// ==========================================
// 6. READONLY & OPTIONAL PROPERTIES
// ==========================================

type User = {
    readonly _id: string;   // Cannot be changed after the object is created
    name: string;
    email: string;
    age: number;
    creditCardDet?: number; // The '?' makes this entirely optional
}

let myUser: User = {
    _id: "12345",
    name: "Sanjoy",
    email: "sanjoy@test.com",
    age: 25
    // Notice I didn't include creditCardDet here. TypeScript is perfectly fine with that!
}

myUser.name = "Sanjoy 2.0"; // Allowed
// myUser._id = "98765";    // <-- ERROR: Cannot assign to '_id' because it is a read-only property.