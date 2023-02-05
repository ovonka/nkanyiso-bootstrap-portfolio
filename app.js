function sendEmail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    subject_id: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_tg3qk66", "template_o63ob7r", params)
    .then(function (res) {
      alert(`Message sent successfully ${res.status}`);
    });
}
