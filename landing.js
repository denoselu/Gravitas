document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect user data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;

    // You can process the collected data here if needed

    // Redirect to the website
    window.location.href = "/packages.html";
  });
});

<script src="https://www.google.com/recaptcha/api.js" async defer></script>;

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Show processing message
  document.getElementById("message").style.display = "block";

  // Simulate processing time (2 hours in milliseconds)
  setTimeout(function () {
    // Redirect to packages.html after 2 hours
    window.location.href = "packages.html";
  }, 2 * 60 * 60 * 1000); // 2 hours
});

// Array of cities in Kenya
const kenyaCities = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Eldoret",
  "Nakuru",
  "Thika",
  "Malindi",
  "Kitale",
  "Garissa",
  "Kakamega",
  "Nyeri",
  "Machakos",
  "Meru",
  "Kisii",
  "Ruiru",
  "Embu",
  "Lamu",
  "Mandera",
  "Bungoma",
  "Homa Bay",
];

// Select the dropdown element
const cityDropdown = document.getElementById("city");

// Add options for each city
kenyaCities.forEach((city) => {
  const option = document.createElement("option");
  option.text = city;
  option.value = city;
  cityDropdown.appendChild(option);
});
