document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.querySelectorAll(".sidenav a[href^='#']");


  openBtn.onclick = function() {
    sidenav.classList.add("active");
  };

 
  closeBtn.onclick = function() {
    sidenav.classList.remove("active");
  };

  
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      
      e.preventDefault();

      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      
      sidenav.classList.remove("active");

      
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    });
  });
});

const formData = new FormData();
formData.append("access_key", "310cc776-2268-49a6-a42e-9076ab3e449b");
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
formData.append("message", "Hello World!");

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData
});


