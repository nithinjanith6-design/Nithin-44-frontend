window.onload = function () {
  fetch("http://127.0.0.1:3000/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var div = document.getElementById("users");

      div.innerHTML = ""; // clear old

      for (var i = 0; i < data.length; i++) {
        var user = data[i];

        var p = document.createElement("p");
        p.innerText =
          user.name + " - " +
          user.roll_number + " - " +
          user.phone_number;

        div.appendChild(p);
      }
    })
    .catch(function (err) {
      console.log("Error:", err);
    });
};
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("http://127.0.0.1:3000/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").innerText = "Message sent successfully!";
  })
  .catch(err => {
    document.getElementById("status").innerText = "Error sending message";
  });
});