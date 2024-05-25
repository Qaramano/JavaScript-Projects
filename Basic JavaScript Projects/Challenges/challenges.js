
  // Validate phone number
  function validatePhoneNumber() {
    // Get and trim phone number input
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Regex pattern for 10-digit phone number
    const pattern = /^\d{10}$/;

    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    document.getElementById('phoneValidationMsg').textContent = isValid
      ? '' // Valid phone number
      : 'Please enter a valid 10-digit phone number.';

    // Return validation status
    return isValid;
  }

  // Attach event listener to form submission
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('validationCheck').addEventListener('submit', function(event) {
      // Validate phone number; prevent submission if invalid
      if (!validatePhoneNumber()) {
        event.preventDefault(); // Stops form submission for invalid number
      }
    });
  });

  function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


  // script.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target section smoothly
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});



$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);



    document.addEventListener("DOMContentLoaded", function() {
        const contactButton = document.querySelector(".sticky-contact-button a");
        const contactForm1 = document.getElementById("contact-form1");

        contactButton.addEventListener("click", function(e) {
            e.preventDefault();
            contactForm1.style.display = "block"; // Show the contact form
        });

        // Close the form when clicking outside or on a close button
        document.addEventListener("click", function(e) {
            if (!contactForm1.contains(e.target)) {
                contactForm1.style.display = "none";
            }
        });
    });



