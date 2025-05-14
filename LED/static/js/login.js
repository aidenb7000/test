const form = document.getElementById('login_form');
const success = document.getElementById('password_success');
const loginBtn = document.getElementById('login_btn');
const verifyBtn = document.getElementById('verify_btn');
const mfaSection = document.getElementById('mfa_section');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form);

  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      if (data["logged_in"]) {
        success.innerHTML = "<b><i>Logged in. Redirecting...</i></b>";
        window.location.replace("/dashboard");
      } else if (data["mfa_required"]) {
        success.style.color = 'green';
        success.innerText = "✔ MFA code sent to your email. Please enter it below.";
        loginBtn.style.display = "none";
        mfaSection.style.display = "flex";
        verifyBtn.style.display = "inline-block";
      } else {
        success.style.color = 'red';
        success.innerText = "❌ Invalid username or password";
      }
    } else {
      // Handle error
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
    success.innerText = "❌ Network error";
  }
});

verifyBtn.addEventListener('click', async () => {
  const mfa_code = document.getElementById("mfa_code").value;

  const formData = new FormData();
  formData.append("mfa_code", mfa_code);

  try {
    const response = await fetch('/api/verify_mfa', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      success.style.color = 'green';
      success.innerHTML = "✅ MFA verified. Logging in...";
      console.log("✅ Redirecting to dashboard...");
      window.location.replace("/dashboard");
    } else {
      success.style.color = 'red'; // ✅ fix this color
      success.innerHTML = "❌ MFA verification failed";
    }
  } catch (error) {
    console.error(error);
    success.style.color = 'red';
    success.innerText = "❌ Network error during MFA check";
  }
});
