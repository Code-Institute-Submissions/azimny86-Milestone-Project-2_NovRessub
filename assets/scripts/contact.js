
function sendMail(contactForm) {
    emailjs.send("gmail", "FAMGII", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "massage": contactForm.massage.value
        })
        .then(
            function(response) {
                window.alert("Your message has been sent successfully !!");
            },
            function(error) {
                console.log("Your message has not been sent correctly !!!!", error);
            }
        );
    return false; // To block from loading a new page
}
