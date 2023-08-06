document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const ctaButton = document.getElementById('cta-button');

    if (!email || !validateEmail(email)) {
        alert("Oops! Looks like there's a hiccup in the matrix. Make sure to enter a valid email address so we can connect you with the future of AI learning and engineering!");
        return;
    }

    // Show a loading message
    ctaButton.textContent = "Creating your AI Learning Adventure...";
    ctaButton.disabled = true;

    // Define your Google Apps Script web app URL
    const googleAppScriptURL = 'https://script.google.com/macros/s/AKfycbyuD47EdtMPY3sXRqbINdXNMUWsHxQtjvGTbdBWAF4KpAEVZBNpeOeUYL1jqC-8PJ3k/exec';

    // Create a script element
    var script = document.createElement('script');

    // Define your callback function
    window.myCallbackFunction = function (data) {
        console.log(data);
        if (data.message === "Email stored successfully") {
            alert("Success! Your email has been added to our Engineering School AI community. Get ready to revolutionize your learning journey with AI-powered insights, targeted questions, and so much more. Stay tuned, exciting content is on its way! Thanks for trusting us with your curiosity.");
        } else {
            console.error('Error:', data.message);
        }

        // Cleanup: remove the script and the global function after the request
        delete window.myCallbackFunction;
        document.head.removeChild(script);

        // Reset button text
        ctaButton.textContent = 'Join the AI revolution now!';
        ctaButton.disabled = false;
    };

    // Prepare the URL
    script.src = googleAppScriptURL + '?email=' + encodeURIComponent(email) + '&prefix=myCallbackFunction';

    // Error handling
    script.onerror = function () {
        alert('Error: Failed to load the script. Please try again.');

        // Reset button text
        ctaButton.textContent = 'Join the AI revolution now!';
        ctaButton.disabled = false;
    };

    // Inject the script into the head
    document.head.appendChild(script);
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
