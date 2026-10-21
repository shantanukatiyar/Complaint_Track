
/* =========================================
   COMTRACK - HOMEPAGE JAVASCRIPT
   File: script.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navActions = document.querySelector(".nav-actions");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isExpanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            navLinks.classList.toggle("open", !isExpanded);

            if (navActions) {
                navActions.classList.toggle("open", !isExpanded);
            }
        });

        // Close the menu after selecting a navigation link
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("open");

                if (navActions) {
                    navActions.classList.remove("open");
                }
            });
        });

        // Close the menu when Escape is pressed
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                menuToggle.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("open");

                if (navActions) {
                    navActions.classList.remove("open");
                }

                menuToggle.focus();
            }
        });
    }

    // Automatically update the footer copyright year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
