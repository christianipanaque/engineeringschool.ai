document.getElementById('cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        // Define your Google App Script web app URL
        const googleAppScriptURL = 'https://script.google.com/macros/s/AKfycbyQH10NJsXDgQerb3IS2_9jebWoQY1CLnxqFCoruhNi319sWIEkzeDOBxTPiYdoYY4W/exec';

        // Create a form data
        let formData = new FormData();
        formData.append('email', email);

        // Post data to Google Apps Script
        fetch(googleAppScriptURL, { method: 'POST', body: formData })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                // You can add some user feedback here, like:
                alert("Your email has been successfully stored!");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});
