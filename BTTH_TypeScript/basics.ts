const username: string = "Ho Van Hung Thinh";
let age: number = 27;
const isActive: boolean = true;
const roles: string[] = ["admin", "editor"];

// Object user
const user: { name: string; email: string; isAdmin: boolean } = {
    name: "Ho Van Hung Thinh",
    email: "hvanhungthinh@example.com",
    isAdmin: true
};

// Print user information
console.log(
    `User: ${user.name} (email: ${user.email}), Roles: ${roles.join(", ")}, Active: ${isActive}`
);
// Function check age
function checkAge(age: number): void {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Under 18");
    }
}
// Call function to check age
checkAge(age);