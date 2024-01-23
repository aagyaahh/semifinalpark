function showReservationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('reservationForm').style.display = 'block';
}
// Function to open the sign-up modal
function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close the sign-up modal
function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Function to submit the sign-up form 
function submitSignupForm() {

    //  close the modal
    closeSignupModal();
}

function createAccount() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');

    // Validation
    if (nameInput.checkValidity() && phoneInput.checkValidity()) {
        // display an alert 
        alert('Account created successfully!');
    } else {
        // display an error message
        alert('Please enter valid information.');
    }
}
