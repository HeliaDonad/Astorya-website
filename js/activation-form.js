document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('activationForm');
    const button = form.querySelector('button[type="submit"]');
    const requiredFields = form.querySelectorAll('input[required]');
  
    function checkFieldsFilled() {
      const allFilled = [...requiredFields].every(field => field.value.trim() !== '');
      button.disabled = !allFilled;
    }
  
    requiredFields.forEach(field => {
      field.addEventListener('input', checkFieldsFilled);
    });
  
    checkFieldsFilled();
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Simuleer succesvolle validatie + doorgaan naar success page
      window.location.href = "succes-activation.html";
    });
  });
  