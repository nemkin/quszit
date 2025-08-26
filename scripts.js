// Toggle buttons
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll("[aria-controls]");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      const target = document.getElementById(targetId);
      if (!target) return;
      const isHidden = target.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", String(!isHidden));
    });
  });
});
