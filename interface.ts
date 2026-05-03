// ==========================================
// 7. INTERFACES & METHODS
// ==========================================
// Interfaces are like blueprints for objects. They dictate what properties 
// and methods an object MUST have.

interface User {
    readonly dbId: number;
    userID: number;
    name: string;
    email: string;
    googleId?: string;       // Optional property
    startTrial(): string;    // Method: takes no arguments, returns a string
    getCoupon(couponName: string, value: number): number; // Method: takes a string and number, returns a number
}

// ==========================================
// 8. "RE-OPENING" INTERFACES (Declaration Merging)
// ==========================================
// Unlike 'type', you can declare an 'interface' with the same name again.
// TypeScript will automatically combine them. This is very useful when 
// adding features to external libraries.

interface User {
    githubToken: string; // Now, every 'User' MUST also have a githubToken.
}

// ==========================================
// 9. INHERITANCE (Extending Interfaces)
// ==========================================
// You can build new interfaces on top of existing ones using 'extends'.

interface Admin extends User {
    // Admin gets everything from User, PLUS this specific role property.
    // The '|' means "OR" (Union Type). The role MUST be exactly one of these three strings.
    role: "admin" | "ta" | "student"; 
}

// ==========================================
// 10. PUTTING IT ALL TOGETHER
// ==========================================

const sanjoy: Admin = { 
    dbId: 22, 
    email: "h@h.com", 
    userID: 2211,
    role: "admin",         // Must be exactly "admin", "ta", or "student"
    githubToken: "github", // Required because we "re-opened" the User interface
    name: "sanj",
    
    startTrial: () => {
        return "trail started";
    },
    
    // Note: The parameter names here ('name' and 'off') don't have to perfectly 
    // match the interface ('couponName' and 'value'), but their TYPES must align!
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10;
    }
}

// Modifying standard properties is fine:
sanjoy.email = "sanjoydeb404@gmail.com"; 

// BUT, if you tried this, TS would stop you because of 'readonly':
// sanjoy.dbId = 33; // <-- ERROR: Cannot assign to 'dbId' because it is a read-only property.