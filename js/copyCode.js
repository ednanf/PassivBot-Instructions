function copyToClipboard() {
  var copyText = document.getElementById("CopyCode");
  navigator.clipboard.writeText(copyText.innerText);
}
