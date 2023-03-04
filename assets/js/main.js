const input = document.querySelector("#email-input");
const newsletterSection = document.querySelector("#newsletter-section");
const confirm = document.querySelector("#confirmation-page");
confirm.style.display = "none";

function confirmNewsletter() {
  if (input.value === "karimovrizvan84@gmail.com") {
    newsletterSection.style.display = "none";
    confirm.style.display = "block";
    console.log("Your Email is:", input.value);
  }
}

