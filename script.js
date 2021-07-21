var objPeople = [
  {
    username: "vueroboticsmember",
    password: "2025",
  },
];

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(
    "you're username is " + username + " and your password is " + password
  );
  for (i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      console.log(username + " is logged in!!!");
      window.location.replace("journal.html");
    }
  }
}
