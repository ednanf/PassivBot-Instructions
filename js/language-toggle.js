document.addEventListener("DOMContentLoaded", function () {
  const languageButtons = document.querySelectorAll(".language-btn");
  const enTexts = document.querySelectorAll(".en-text");
  const ruTexts = document.querySelectorAll(".ru-text");

  function setLanguage(language) {
    localStorage.setItem("preferredLanguage", language);

    if (language === "en") {
      enTexts.forEach((el) => (el.style.display = "block"));
      ruTexts.forEach((el) => (el.style.display = "none"));
    } else {
      enTexts.forEach((el) => (el.style.display = "none"));
      ruTexts.forEach((el) => (el.style.display = "block"));
    }
  }

  // Load language preference from localStorage
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
  setLanguage(savedLanguage);

  // Add event listeners to each language button
  languageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.trim() === "🇺🇸") {
        setLanguage("en");
      } else if (this.textContent.trim() === "🇷🇺") {
        setLanguage("ru");
      }
    });
  });
});
