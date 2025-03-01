// Initialize EmailJS
 // Global variable to store the OTP

 emailjs.init({
    publicKey: "RYIvWcj3x8dk7if6f"
});


  // Replace with your EmailJS User ID

let generatedOtp = null;  // Store the OTP

document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim(); // Get email input and trim spaces
    if (email === "") {
        alert("Please enter a valid email address.");
        return;
    }
    sendOTP(email); // Pass email as an argument
});

function sendOTP(email) { // Accept email as a parameter
    generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate and store OTP

    let templateParams = {
        to_email: email,
        otp: generatedOtp // Send OTP in the email
    };

    emailjs.send("service_uxmub12", "template_tf2nwxh", templateParams, "RYIvWcj3x8dk7if6f")
    .then(function(response) {
        alert("OTP sent successfully!");
        document.getElementById("otpSection").style.display = "block"; // Show OTP input field
    }, function(error) {
        alert("Error sending OTP");
        console.error("EmailJS Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('otpForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        if (email === "") {
            alert("Please enter a valid email address.");
            return;
        }
        sendOTP(email);
    });

    document.getElementById('verifyOtpButton').addEventListener('click', function() {
        const enteredOtp = document.getElementById('otp').value;
        verifyOTP(enteredOtp);
    });
});

