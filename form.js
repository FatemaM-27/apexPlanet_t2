document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // stop form from submitting first
    event.preventDefault();

    let name = document.getElementById("name").value.trim(); // trim removes spaces from beginning and end of the value
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let workshop = document.getElementById("workshop").value;

    // simple email check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // check email
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // check phone
    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    // check workshop
    if (workshop === "") {
        alert("Please select a workshop.");
        return;
    }

    // if all checks pass
    alert("Form submitted successfully!");
    this.submit(); // allow submission this refers to the form
});
