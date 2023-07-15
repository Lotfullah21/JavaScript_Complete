function check() {
  var email2 = document.getElementById("repeated-email");
  var email1 = document.getElementById("email_1");
  if (email1.value != email2.value) {
    alert("Emails must be same");
    return false;
  }
}

function pickName() {
  if (document.getElementById("yes_name").checked) {
    document.getElementById("showName").style.display = "inline";
    document.getElementById("name").setAttribute("required", true);
  } else {
    document.getElementById("name").removeAttribute("required");
    document.getElementById("showName").style.display = "none";
  }
}
