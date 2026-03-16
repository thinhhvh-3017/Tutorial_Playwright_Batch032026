interface IUser {
    name: string;
    email: string;
    isAdmin: boolean;
}

class User implements IUser {
    name: string;
    email: string;
    isAdmin: boolean;

    constructor(name: string, email: string, isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    getInfo(): string {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
}
// Create class AdminUser that extends User
class AdminUser extends User {
    constructor(name: string, email: string) {
        super(name, email, true);
    }
    deleteUser(user: User): void {
        console.log(`Admin ${this.name} deleted user ${user.name}`);
    }
}

// Create instances of User and AdminUser
const user1 = new User("Ho Van Hung Thinh", "hvhungthinh@example.com", false);
const admin1 = new AdminUser("Admin User", "admin@example.com");
console.log(user1.getInfo());
console.log(admin1.getInfo());

admin1.deleteUser(user1);

// Create array of users
const users: User[] = [
    user1,
    admin1,
    new User("Ho Van Hung Thinh", "hvhungthinh@example.com", false),
    new AdminUser("Admin User", "admin@example.com")
];

// Print all users
users.forEach((user) => {
    console.log(user.getInfo());
});

