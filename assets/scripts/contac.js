function sendMail(contactForm) {
    emeilja.send("gmail" , "FGII-email" , {
        "from_name": contactForm.name.value,
        "from.email": contactForm.emailaddress.value,
        "massage": contactForm.massage.value,
    })
    .then(
        function(response) {
        console.log("Success", response);
    },
    function(error) {
        console.log("Failed", error);
    }
    );
    return false;
}

function alertFunction() {
    alert("Your message has been sent !");
}