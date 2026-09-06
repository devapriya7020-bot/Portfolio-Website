emailjs.init("BI93Prdno294BlArj");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_nhr5bij", "template_irkqlcm", {
        name: this.name.value,
        email: this.email.value,
        to_email: this.to_email.value,
        message: this.message.value
    })
    .then(function() {
        document.getElementById("status").innerHTML = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
        document.getElementById("status").innerHTML = "Failed to send message.";
        console.error(error);
    });
});