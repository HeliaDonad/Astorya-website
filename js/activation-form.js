// public/js/activation-form.js

document.getElementById("activationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const codeInput = document.getElementById("code");
  const certificateInput = document.getElementById("certificate");

  const activationCode = codeInput.value.trim();
  const certificateFile = certificateInput.files[0];

  if (!activationCode || !certificateFile) {
    showPopup("⚠️ Please provide both the activation code and the death certificate.");
    return;
  }

  const formData = new FormData();
  formData.append("activationCode", activationCode);
  formData.append("certificate", certificateFile);

  try {
    const res = await fetch("https://astorya-api.onrender.com/api/users/activate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      showPopup("✨ Thank you. The star has been activated.\n\nTheir memories will soon shine in the shared starry sky.");
      codeInput.value = "";
      certificateInput.value = "";
    } else {
      showPopup(`⚠️ Something went wrong:\n${data.message || "The star could not be activated. Please try again later or contact our support team."}`);
    }
  } catch (err) {
    console.error("❌ Server error:", err);
    showPopup("❌ Server error. Please try again later.");
  }
});

function showPopup(message) {
  const popup = document.getElementById("activationPopup");
  const messageBox = document.getElementById("popupMessage");
  messageBox.textContent = message;
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("activationPopup");
  popup.classList.add("hidden");
}