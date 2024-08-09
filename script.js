document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const hashedPassword = btoa(password); // Simple base64 encoding for demonstration

    localStorage.setItem(username, hashedPassword);
    alert('User registered successfully!');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === btoa(password)) {
        alert('Login successful!');
        // Redirect to protected route or set session
    } else {
        alert('Invalid username or password');
    }
});
