script.js
// script.js
https://my-backend-9b3i.onrender.com
  then(response => response.json())
  .then(data => {
    console.log(data); // check message in browser console
    document.getElementById('backend-message').innerText = data.message;
  })
  .catch(err => console.error(err));