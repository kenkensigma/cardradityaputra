 // Mengecek apakah pengguna sudah login, jika sudah login redirect ke halaman beranda
 window.onload = function() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      window.location.href = "beranda alr.html"; // Redirect ke halaman beranda jika sudah login
    }
  };

  function login() {
    // Simulasi login, set status login di sessionStorage
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "beranda alr.html"; // Redirect ke halaman beranda setelah login
  }