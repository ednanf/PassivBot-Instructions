document.addEventListener("DOMContentLoaded", function () {
  // Check if user has already accepted the warning
  if (!localStorage.getItem("warningAccepted")) {
    // If not accepted yet, show the modal
    const modal = document.getElementById("warning-modal");
    modal.style.display = "flex";

    // Add event listener to the button
    document
      .getElementById("accept-warning")
      .addEventListener("click", function () {
        // Store that user has accepted the warning
        localStorage.setItem("warningAccepted", "true");
        // Hide the modal
        modal.style.display = "none";
      });
  }
});
