document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleIcon = toggleBtn.querySelector("i");
  
    // Check the local storage for theme preference
    if (localStorage.getItem("theme") === "night") {
      document.body.classList.add("night-mode");
      toggleIcon.classList.remove("fa-sun");
      toggleIcon.classList.add("fa-moon");
    }
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("night-mode");
  
      if (document.body.classList.contains("night-mode")) {
        localStorage.setItem("theme", "night");
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
      } else {
        localStorage.removeItem("theme");
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
      }
    });
  });
  