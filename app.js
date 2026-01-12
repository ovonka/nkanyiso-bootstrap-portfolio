(function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";

    try {
      const res = await emailjs.sendForm(
        "service_tg3qk66",
        "template_o63ob7r",
        form
      );

      alert(`Message sent successfully ✅ (${res.status})`);
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);

      const msg =
        err?.text || err?.message || JSON.stringify(err) || "Unknown error";
      alert(`Sorry—message failed to send: ${msg}`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;
    }
  });
})();
