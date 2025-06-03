const validCredentials = { username: 'admin', password: 'password123' };

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === validCredentials.username && p === validCredentials.password) {
    // mark as logged in, redirect to dashboard
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    document.getElementById('errorMsg').textContent = 'Invalid username or password.';
  }
});