function copyToClipboard(event) {
  let copyText = document.getElementById("CopyCode");
  navigator.clipboard
    .writeText(copyText.innerText)
    .then(() => {
      const button = event.target;
      if (button.classList.contains("ru-text")) {
        button.innerText = "✅ Скопировано!";
      } else {
        button.innerText = "✅ Copied!";
      }
    })
    .catch((err) => console.error("Error copying text: ", err));
}
