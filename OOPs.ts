// ==========================================
// 16. CLASSES & ACCESS MODIFIERS
// ==========================================

// The 'Old' Way (Standard JavaScript style, but typed)
class StandardUser {
    public email: string;     // Can be accessed from anywhere (this is the default)
    private name: string;     // Can ONLY be accessed inside this specific class
    readonly city: string = "Guwahati"; 

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

// THE 'PRO' WAY: Parameter Properties (Shorthand)
// By adding public/private in the constructor, TS automatically creates and assigns the variables!
class User {
    // We only need to define properties here if they have a hardcoded default
    protected _courseCount = 1; 
    readonly city: string = "Guwahati";

    constructor(
        public email: string, 
        public name: string, 
        private userId: string
    ) {}

    // A private method: only the User class itself can call this
    private deleteToken() {
        console.log("Token deleted");
    }
}

const sanjoy = new User("sanjoy@test.com", "Sanjoy", "user123");
// sanjoy.userId;     // <-- ERROR: Property 'userId' is private.
// sanjoy.deleteToken(); // <-- ERROR: Property 'deleteToken' is private.


// ==========================================
// 17. GETTERS & SETTERS
// ==========================================
// Used to get or set private/protected properties securely.

class Account {
    constructor(private _balance: number) {}

    // GETTER: Behaves like a property, but runs a function
    get balance(): number {
        return this._balance;
    }

    // SETTER: Note that setters in TypeScript CANNOT have a return type annotation
    set balance(newAmount: number) {
        if (newAmount < 0) {
            throw new Error("Balance cannot be negative!");
        }
        this._balance = newAmount;
    }
}

const myAcc = new Account(100);
console.log(myAcc.balance); // 100 (Uses the getter)
myAcc.balance = 150;        // Uses the setter


// ==========================================
// 18. INHERITANCE & 'PROTECTED'
// ==========================================

// 'SubUser' inherits everything from 'User' using 'extends'
class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        // We can access '_courseCount' here because it was marked 'protected' in the parent class.
        // If it was 'private', we would get an error here!
        this._courseCount = 4; 
    }
}


// ==========================================
// 19. INTERFACES WITH CLASSES ('implements')
// ==========================================

interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

// 'implements' acts as a strict contract. YouTube MUST have the exact properties of TakePhoto.
// You can add MORE properties (like 'short'), but you cannot have less.
class YouTube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // An extra property is totally fine
    ) {}
}


// ==========================================
// 20. ABSTRACT CLASSES
// ==========================================
// Abstract classes are blueprints. You CANNOT create an object directly from them.
// They exist purely to be extended by other classes.

abstract class Camera {
    constructor(public cameraMode: string, public filter: string) {}

    // Abstract method: The parent doesn't provide the logic, the child MUST provide it.
    abstract getSepia(): void; 

    // Standard method: The parent provides default logic, the child can use it as-is.
    getReelTime(): number { 
        return 8; 
    }
}

// const myCam = new Camera("auto", "none"); // <-- ERROR: Cannot create an instance of an abstract class.

class Instagram extends Camera {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number // We can still ask for more data in the child constructor
    ) {
        super(cameraMode, filter); // 'super' passes these values up to the parent 'Camera' class
    }

    // We MUST write this method because the parent marked it 'abstract'
    getSepia(): void {
        console.log("Applying sepia filter...");
    }
}