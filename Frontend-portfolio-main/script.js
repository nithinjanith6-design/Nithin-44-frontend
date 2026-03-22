// script.js

fetch("https://your-actual-render-link.onrender.com/data") // replace with your Render URL
  .then(res => res.json())
  .then(data => document.getElementById("backend-message").innerText = JSON.stringify(data))
  .catch(() => document.getElementById("backend-message").innerText = "Failed to fetch data");