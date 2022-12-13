function sendMail() {
    userName = document.getElementById("name").value
    email = document.getElementById("email").value
    emailBody = document.getElementById("emailBody").value
    subject = "Portfolio Contact Submission"
    
    let formattedBody = `${emailBody} \n\nName: ${userName}\n${email == "" ? "" : "Respond To Email: " + email}`
    let mailToLink = `mailto:nacnac93@bu.edu?body=${encodeURIComponent(formattedBody)}&subject=${encodeURIComponent(subject)}`;
    window.location.href = mailToLink;
}