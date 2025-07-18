// AQ Accordion

document.addEventListener("DOMContentLoaded", () => {
   const faqContainer = document.querySelector(".faq");
   
   faqContainer.addEventListener("click", (event) => {
    const groupHeader = event.target.closest(".faq-group-header");
    
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

// Toggle visibility of the body
    groupBody.classList.toggle("open");

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");
        
        if (otherBody.classList.contains("open")) {
          otherBody.classList.remove("open");
          otherIcon.classList.remove("fa-minus");
          otherIcon.classList.add("fa-plus");
        }
      }
    });
});
});

// Mobile Menu 
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});