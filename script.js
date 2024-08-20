// loader 
// document.addEventListener('DOMContentLoaded', function () {
//     // Hide the loader after the page has fully loaded
//     window.addEventListener('load', function () {
//         const loader = document.getElementById('loader');
//         loader.style.display = 'none';
//     });
// });

// Initialize EmailJS with your User ID
function contactFormSendData() {
    (function() {
        emailjs.init("vSKNeknWbHBT4sOju"); // Replace with your EmailJS User ID
    })();
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Collect the form data
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
    
        // Send the form data using EmailJS
        emailjs.send("service_d34h93r", "template_htb0178", formData)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Thank you! Your message has been sent.");
        }, function(error) {
           console.log('FAILED...', error);
           alert("Oops! Something went wrong, and we couldn't send your message.");
        });
    });
    
}

function orderFormData() {
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize EmailJS with your User ID
        (function() {
            emailjs.init("vSKNeknWbHBT4sOju"); // Replace with your EmailJS User ID
        })();
    
        // Handle the form submission
        document.getElementById('orderForm').addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Collect form data
            const serviceID = 'service_qpb8r4h'; // Or the ID of the service you set up
            const templateID = 'template_dro0xvy'; // Replace with your actual EmailJS template ID
    
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                food: document.getElementById('food').value,
                quantity: document.getElementById('quantity').value,
            };
    
            // Send the email
            emailjs.send(serviceID, templateID, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your order has been placed successfully!');
                    // Close the modal
                    const modal = bootstrap.Modal.getInstance(document.getElementById('placeOrderModal'));
                    modal.hide();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert('There was an error placing your order. Please try again.');
                });
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your User ID
    emailjs.init("vSKNeknWbHBT4sOju");

    // Handle the form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const serviceID = 'service_d34h93r'; // Or the ID of the service you set up
        const templateID = 'template_dro0xvy'; // Replace with your actual EmailJS template ID

        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            food: document.getElementById('food').value,
            quantity: document.getElementById('quantity').value,
        };

        // Send the email
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your order has been placed successfully!');
                // Close the modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('placeOrderModal'));
                modal.hide();
            }, function(error) {
                console.error('FAILED...', error);
                alert('There was an error placing your order. Please try again.');
            });
    });
});

// placing order logic

// document.addEventListener('DOMContentLoaded', function () {
//     // Initialize EmailJS with your User ID
//     emailjs.init('vSKNeknWbHBT4sOju');

//     const orderForm = document.getElementById('orderForm');

//     if (orderForm) {
//         orderForm.addEventListener('submit', function (event) {
//             event.preventDefault();

//             // Collect form data
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const phone = document.getElementById('phone').value;
//             const food = document.getElementById('food').value;
//             const quantity = document.getElementById('quantity').value;

//             // Set up the EmailJS parameters
//             const templateParams = {
//                 name: name,
//                 email: email,
//                 phone: phone,
//                 food: food,
//                 quantity: quantity,
//             };

//             // Send the email via EmailJS
//             emailjs.send('service_qpb8r4h', 'template_dro0xvy', templateParams)
//                 .then(function (response) {
//                     console.log('SUCCESS!', response.status, response.text);
//                     alert('Your order has been placed successfully!');
//                     orderForm.reset(); // Clear the form
//                 }, function (error) {
//                     console.log('FAILED...', error);
//                     alert('Oops! Something went wrong, please try again.');
//                 });
//         });
//     } else {
//         console.error('Order form element not found.');
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your User ID
    emailjs.init('vSKNeknWbHBT4sOju');

    const orderForm = document.getElementById('orderForm');
    const submitButton = document.getElementById('submitOrderButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Show loading indicator
            loadingIndicator.style.display = 'block';
            submitButton.disabled = true; // Disable the submit button

            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById("address").value
            const food = document.getElementById('food').value;
            const quantity = document.getElementById('quantity').value;
            

            // Set up the EmailJS parameters
            const templateParams = {
                name: name,
                email: email,
                phone: phone,
                address: address,
                food: food,
                quantity: quantity,
            };

            // Send the email via EmailJS
            email.send('service_qpb8r4h', 'template_dro0xvy ', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Hide loading indicator and show success message
                    loadingIndicator.style.display = 'none';
                    successMessage.style.display = 'block';
                    orderForm.reset(); // Clear the form
                    submitButton.disabled = false; // Re-enable the submit button
                }, function (error) {
                    console.log('FAILED...', error);

                    // Hide loading indicator and show error message
                    loadingIndicator.style.display = 'none';
                    errorMessage.style.display = 'block';
                    submitButton.disabled = false; // Re-enable the submit button
                });
        });
    } else {
        console.error('Order form element not found.');
    }
});
