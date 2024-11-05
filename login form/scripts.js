const users = [
    { user_name: 'meet', password: '1234567' },
    { user_name: 'jay', password: '124567' }
];

function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Get error message elements
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    function isValidUser (username, password) {
        return users.some(user => user.user_name === username && user.password === password);
    }

    // Check for empty username and password length
    if (!username) {
        usernameError.textContent = "Username cannot be empty.";
        isValid = false;
    }
    
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Check if the user is valid only if both fields are filled
    if (isValid && isValidUser (username, password)) {
        alert("Login successful!");
    } else if (isValid) {
        // If the username and password are correct but not valid user
        usernameError.textContent = "Invalid username or password.";
        isValid = false;
    }

    return isValid; // Prevent form submission if not valid
}