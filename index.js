function validateForm() {
  const form = document.getElementById('signupForm');

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const day = form.day.value;
  const month = form.month.value;
  const year = form.year.value;
  const genderSelected = form.gender.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate first name and last name
  if (!firstName || !lastName) {
    alert("Please enter your first and last name.");
    return false;
  }

  // Validate email format
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Validate DOB
  if (day === "Day" || month === "Month" || year === "Year") {
    alert("Please select a valid date of birth.");
    return false;
  }

  // Validate gender
  if (!genderSelected) {
    alert("Please select your gender.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
  }