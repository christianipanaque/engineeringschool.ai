document.getElementById('cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        // Define your Google Apps Script web app URL
        const googleAppScriptURL = 'https://script.google.com/macros/s/AKfycbyuD47EdtMPY3sXRqbINdXNMUWsHxQtjvGTbdBWAF4KpAEVZBNpeOeUYL1jqC-8PJ3k/exec';

        // Create a script element
        var script = document.createElement('script');

        // Define your callback function
        window.myCallbackFunction = function (data) {
            console.log(data);
            if (data.message === "Email stored successfully") {
                alert("Your email has been successfully stored!");
            } else {
                console.error('Error:', data.message);
            }
        };

        // Prepare the URL
        script.src = googleAppScriptURL + '?email=' + encodeURIComponent(email) + '&prefix=myCallbackFunction';

        // Inject the script into the head
        document.head.appendChild(script);
    }
});
