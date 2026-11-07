"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (!fullName || !email || !country || !comments) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      document.getElementById("visitorEmail").focus();
      return;
    }

    alert("Thank you! Your form has been submitted successfully.");
    form.reset();
  });
});
