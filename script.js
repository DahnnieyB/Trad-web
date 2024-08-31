document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            form.reset();
            alert("Thank you for your message. It has been sent.");
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector("nav ul");
    const menu = document.getElementById("menu");

    menu.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menu.classList.toggle("openmenu");
    });
});
