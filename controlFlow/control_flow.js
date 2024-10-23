let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else{
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else{
        userMessage = "Welcome, User!";
    }
} else{
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);

let user_role = prompt("Enter your role (Employee / Enrolled Member / Subscriber / Non-Subscriber)");
let user_access;

if(user_role === "Employee"){
    user_access = "Dietary Services";
} else if(user_role === "Enrolled Member"){
    user_access = "Dietary Services and one on one interactions";
} else if(user_role === "Subscriber"){
    user_access = "Partial Dietary Services";
}else if(user_role === "Non-Subscriber"){
    user_access = "Nothing bruh";
}else{
    console.log("Role entered is not an option");
}

console.log("Hello ",user_role,", you have access to: ",user_access);