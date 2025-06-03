function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'AR_login.html';
  }