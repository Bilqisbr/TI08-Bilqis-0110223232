function Login() {
    var Username = "ValentineBoy";
    var Password = "Jaehyun14";

    var InputUsername = document.getElementById("username").value;
    var InputPassword = document.getElementById("password").value;

    if (InputUsername === Username && InputPassword === Password) {
      alert;window.location.href = "loginsukses.html";
    } else {
      alert("Login Gagal. Silakan coba lagi.");
    }
  }