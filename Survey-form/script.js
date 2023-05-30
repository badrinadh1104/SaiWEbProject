// Fetch data from JSON file
fetch('https://prog8570.glitch.me/data.json')
    .then(response => response.json())
    .then(data => {
        // Get the opinion options and shoe size values from the data
        const opinionOptions = data.opinion;
        const shoeSizeValues = data.shoeSize;

        // Populate the opinion options
        const opinionOptionsContainer = document.getElementById('opinionOptions');
        opinionOptions.forEach(option => {
            const radioBtn = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = 'opinion';
            radioBtn.value = option;
            opinionOptionsContainer.appendChild(radioBtn);

            const label = document.createElement('label');
            label.textContent = option;
            opinionOptionsContainer.appendChild(label);
        });

        // Populate the shoe size checkboxes
        const shoeSizeOptionsContainer = document.getElementById('sizeOptions');
        shoeSizeValues.forEach(size => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'shoeSize';
            checkbox.value = size;
            shoeSizeOptionsContainer.appendChild(checkbox);

            const label = document.createElement('label');
            label.textContent = size;
            shoeSizeOptionsContainer.appendChild(label);
        });
    })
    .catch(error => console.error(error));


// Function to validate form fields
function validateForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var brand = document.getElementById("brand").value;
    var opinion = document.querySelector('input[name="opinion"]:checked');
    var comments = document.getElementById("comments").value;
    console.log(name + " " + email)
        // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("brandError").innerHTML = "";
    document.getElementById("opinionError").innerHTML = "";
    document.getElementById("commentsError").innerHTML = "";

    // Perform form validation
    var isValid = true;
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        isValid = false;
    }
    if (age === "") {
        document.getElementById("ageError").innerHTML = "Please enter your age.";
        isValid = false;
    }
    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select your gender.";
        isValid = false;
    }
    if (brand === "") {
        document.getElementById("brandError").innerHTML = "Please enter your preferred shoe brand.";
        isValid = false;
    }
    if (!opinion) {
        document.getElementById("opinionError").innerHTML = "Please select your opinion.";
        isValid = false;
    }
    if (comments === "") {
        document.getElementById("commentsError").innerHTML = "Please enter your comments.";
        isValid = false;
    }

    // Perform additional form validations
    // Text field with answer starting with a capital letter and max length of 10 characters
    var nameRegex = /^[A-Z][a-zA-Z]{0,9}$/;
    if (!name.match(nameRegex)) {
        document.getElementById("nameError").innerHTML = "Name must start with a capital letter and have a maximum of 10 characters.";
        isValid = false;
    }

    // Text area with minimum length of 30 characters
    if (comments.length < 30) {
        document.getElementById("commentsError").innerHTML = "Comments must be at least 30 characters long.";
        isValid = false;
    }

    return isValid;
}

// Event listener for form submission
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (validateForm()) {
        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var brand = document.getElementById("brand").value;
        var opinion = document.querySelector('input[name="opinion"]:checked').value;
        var comments = document.getElementById("comments").value;

        // Display success message with form data
        document.getElementById("successMessage").innerHTML = "Form submitted successfully. Your Name: " + name + "<br>Email: " + email + "<br>Age: " + age + "<br>Gender: " + gender + "<br>Preferred Shoe Brand: " + brand + "<br>Opinion: " + opinion + "<br>Comments: " + comments;

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("brand").value = "";
        document.querySelector('input[name="opinion"]:checked').checked = false;
        document.getElementById("comments").value = "";

        // Hide success message after 3 seconds
        setTimeout(function() {
            document.getElementById("successMessage").innerHTML = "";
        }, 10000);
    }
});

// Event listener for form reset
document.getElementById("resetBtn").addEventListener("click", function() {
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("brand").value = "";
    document.querySelector('input[name="opinion"]:checked').checked = false;
    document.getElementById("comments").value = "";

    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("brandError").innerHTML = "";
    document.getElementById("opinionError").innerHTML = "";
    document.getElementById("commentsError").innerHTML = "";
});