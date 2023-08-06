function subscribeEmail(e) {
    e.preventDefault();

    const email = document.getElementById(this.inputElementId).value;
    const ctaButton = document.getElementById(this.ctaButtonElementId);

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
    window.myCallbackFunction = (function (data) {
        console.log(data);
        if (data.message === "Email stored successfully") {
            alert("Success! Your email has been added to our Engineering School AI community. Get ready to revolutionize your learning journey with AI-powered insights, targeted questions, and so much more. Stay tuned, exciting content is on its way!");
        } else {
            console.error('Error:', data.message);
        }

        // Cleanup: remove the script and the global function after the request
        delete window.myCallbackFunction;
        document.head.removeChild(script);

        // Reset button text
        ctaButton.textContent = this.resetButtonText;
        ctaButton.disabled = false;
    }).bind(this);

    // Prepare the URL
    script.src = googleAppScriptURL + '?email=' + encodeURIComponent(email) + '&prefix=myCallbackFunction';

    // Error handling
    script.onerror = function () {
        alert('Error: Failed to load the script. Please try again.');

        // Reset button text
        ctaButton.textContent = this.resetButtonText;
        ctaButton.disabled = false;
    };

    // Inject the script into the head
    document.head.appendChild(script);
}

const dataTop = {
    resetButtonText: "Join the AI revolution now!",
    inputElementId: "top-email-input",
    ctaButtonElementId: "top-email-cta-button"
}

const dataBottom = {
    resetButtonText: "Join the AI revolution now!",
    inputElementId: "bottom-email-input",
    ctaButtonElementId: "bottom-email-cta-button"
}

document.getElementById('top-email-form').addEventListener('submit', subscribeEmail.bind(dataTop));
document.getElementById('bottom-email-form').addEventListener('submit', subscribeEmail.bind(dataBottom));

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
