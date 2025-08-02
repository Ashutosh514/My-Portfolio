const subtitles = [
    "Web Developer",
    "Problem Solver",
    "Frontend Expert",
    "UI/UX Enthusiast"
  ];

  const subtitleEl = document.getElementById("subtitle3");

  let subtitleIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let pause = 1500;

  function type() {
    if (charIndex < subtitles[subtitleIndex].length) {
      subtitleEl.textContent += subtitles[subtitleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pause);
    }
  }

  function erase() {
    if (charIndex > 0) {
      subtitleEl.textContent = subtitles[subtitleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, deletingSpeed);
    } else {
      subtitleIndex = (subtitleIndex + 1) % subtitles.length;
      setTimeout(type, typingSpeed);
    }
  }

  // Start the typing effect
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
  });



document.addEventListener('DOMContentLoaded', function () {
  // Skill Progress Bars – static fill on page load
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
    bar.style.backgroundColor = "#00ff99";
    bar.style.height = "10px";
  });

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


    // Button click handler for every button
    document.querySelectorAll("button, .btn, input[type='submit']").forEach(btn => {
      btn.addEventListener("click", () => {
        console.log(`Button clicked: ${btn.innerText || btn.value}`);
        // Add your custom action here, if needed
      });
    });

    // Toggle navigation menu on small screens
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }

    document.querySelectorAll(".form-container button").forEach(button => {
      button.addEventListener("click", function () {
        alert("Our team will contact you soon for repair details!");
      });
    });

    function navigateToCertificate(type) {
      window.location.href = `certificate.html#${type}`;
    }

    // Butterfly animation on form submit
    const form = document.getElementById('contactForm');
    const butterfly = document.getElementById('butterfly');
    if (form && butterfly) {
      form.addEventListener('submit', function (e) {
        butterfly.classList.add('fly-away');
        setTimeout(() => {
          form.submit();
        }, 1200);
        e.preventDefault();
      });
    }

    // Chatbot logic
    const chatbotBubble = document.getElementById('chatbot-bubble');
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (chatbotBubble && chatbotWidget && chatbotClose && chatbotForm && chatbotInput && chatbotMessages) {
      chatbotBubble.addEventListener('click', () => {
        chatbotWidget.style.display = 'flex';
        chatbotBubble.style.display = 'none';
        chatbotInput.focus();
        chatbotMessages.innerHTML = `<div><strong>Bot:</strong> Hi! 👋 How can I help you today?</div>`;
      });

      chatbotClose.addEventListener('click', () => {
        chatbotWidget.style.display = 'none';
        chatbotBubble.style.display = 'flex';
      });

      chatbotForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userMsg = chatbotInput.value.trim();
        if (!userMsg) return;
        chatbotMessages.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;
        chatbotInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Simple bot responses
        let botReply = "Sorry, I didn't understand that. Can you rephrase?";
        if (/hello|hi|hey/i.test(userMsg)) {
          botReply = "Hello! How can I assist you?";
        } else if (/contact|email|phone/i.test(userMsg)) {
          botReply = "You can reach me at ashutoshfzl@gmail.com or call +91-9554209826.";
        } else if (/project|portfolio/i.test(userMsg)) {
          botReply = "Check out my projects in the Projects section above!";
        } else if (/thank/i.test(userMsg)) {
          botReply = "You're welcome! 😊";
        } else if (/bye|goodbye/i.test(userMsg)) {
          botReply = "Goodbye! Have a great day! 👋";
        } else if (/help|support/i.test(userMsg)) {
          botReply = "I'm here to help! What do you need assistance with?";
        } else if (/skills|experience/i.test(userMsg)) {
          botReply = "I have experience in web development, React, Node.js, and more. Check my Skills section!";
        } else if (/resume|cv/i.test(userMsg)) {
          botReply = "You can download my resume from the Resume section above. or download it directly from here: <a href='https://drive.google.com/file/d/1cSX32XdxAXazgxTfQf-OOynbgBO5NX-z/view?usp=sharing' target='_blank'>Download Resume</a>";
        } else if (/location|where/i.test(userMsg)) {
          botReply = "I'm based in India, but I can work remotely!";
        } else if (/education|degree/i.test(userMsg)) {
          botReply = "I have a Bachelor's degree in Computer Science from Babu Banarasi Das University.";
        } else if (/hobbies|interests/i.test(userMsg)) {
          botReply = "I enjoy coding, reading, and exploring new technologies.";
        }
        setTimeout(() => {
          chatbotMessages.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
          chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 600);
      });
    }
  });