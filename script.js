function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        let genderValues = [];
        gender.forEach(g => {
            genderValues.push(g.value);
        });

        const responseDetails = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${genderValues.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        const responseContainer = document.getElementById("responseDetails");
        responseContainer.innerHTML = responseDetails;

        const popup = document.getElementById("popup");
        popup.style.display = "block";

        // Reset the form after displaying the response
        resetForm();
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Close the popup if the user clicks outside the popup
window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
