document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".topbar-right-img");
  const closeBtns = document.querySelectorAll(".close-btn");
  const menuContents = document.querySelectorAll(".menu");

  // Open menu
  menus.forEach((menu, index) => {
    menu.addEventListener("click", function () {
      menuContents[index].style.setProperty("left", "0", "important");
      menuContents[index].classList.add("active");
    });
  });

  // Close menu
  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      menuContents[index].style.left = "-200vw"; // Hide only the clicked menu
      menuContents[index].classList.remove("active");
    });
  });

  // Scroll to section function
  function scrollToSection() {
    var urlParams = new URLSearchParams(window.location.search);
    var sectionId = urlParams.get("section");
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found with ID:", sectionId);
    }
  }
  window.onload = scrollToSection;

  // logo-link
  let headerImgs = document.querySelectorAll(".header-img-02");
  Array.from(headerImgs).forEach((headerImg) => {
    let link = document.createElement("a");
    link.href = "https://vmls.edu.in/";
    headerImg.parentNode.insertBefore(link, headerImg);
    link.appendChild(headerImg);
  });

  // go to top button
  var goTopBtn = document.createElement("button");
  goTopBtn.innerHTML = "&#9757;";
  goTopBtn.style.display = "none";
  goTopBtn.style.position = "fixed";
  goTopBtn.style.bottom = "20px";
  goTopBtn.style.right = "30px";
  goTopBtn.style.zIndex = "9999";
  goTopBtn.style.border = "none";
  goTopBtn.style.outline = "none";
  goTopBtn.style.backgroundColor = "#8d191c";
  goTopBtn.style.color = "white";
  goTopBtn.style.cursor = "pointer";
  goTopBtn.style.padding = "15px";
  goTopBtn.style.borderRadius = "50%";
  goTopBtn.style.width = "clamp(4vw, 80px, 80px)";
  goTopBtn.style.height = "clamp(4vw, 80px, 80px)";
  goTopBtn.style.fontSize = "clamp(2vw, 30px, 30px)";
  goTopBtn.style.display = "flex";
  goTopBtn.style.alignItems = "center";
  goTopBtn.style.justifyContent = "center";
  document.body.appendChild(goTopBtn);

  function toggleGoTopButton() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      goTopBtn.style.display = "flex";
    } else {
      goTopBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleGoTopButton);
  toggleGoTopButton();

  // Scroll to top when button is clicked
  goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // embedding-links head
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./styles/dropdown.css";

  const head = document.head || document.getElementsByTagName("head")[0];
  const lastChild = head.lastElementChild;

  if (lastChild.tagName === "LINK") {
    head.insertBefore(link, lastChild.nextSibling);
  } else {
    head.appendChild(link);
  }

  const fontAwesomeLink = document.createElement("link");
  fontAwesomeLink.rel = "stylesheet";
  fontAwesomeLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  head.appendChild(fontAwesomeLink);

  const script = document.createElement("script");
  script.src = "./script/dropdown.js";
  document.body.appendChild(script);

  // form-code
  var phoneInputs = document.querySelectorAll("input#phone");
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.setAttribute("required", true);
    phoneInput.setAttribute("placeholder", "Enter your Mobile number*");
  });

  // video-popup-js
  function getYouTubeID(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoThumbnails = document.querySelectorAll(".video-thumbnail");
  const popup = document.getElementById("video-popup");
  const popupVideo = document.getElementById("popup-video");
  const closePopup = document.querySelector(".close-popup");

  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-video-url");
      const videoId = getYouTubeID(videoUrl);
      if (videoId) {
        popupVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        popup.style.display = "flex";
      }
    });
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    popupVideo.src = ""; // Stop the video
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
      popupVideo.src = ""; // Stop the video
    }
  });

  // hover video infrastructure
  function VideoPlay() {
    const infraColumns = document.querySelectorAll(".column-infra");

    infraColumns.forEach((column) => {
      const img = column.querySelector("img");
      const videoSrc = column.getAttribute("data-video");

      column.addEventListener("mouseenter", () => {
        const video = document.createElement("video");
        video.src = videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.classList.add("video-overlay");
        video.playsInline = true;

        img.style.display = "none";
        column.querySelector(".image-infra").appendChild(video);
      });

      column.addEventListener("mouseleave", () => {
        const video = column.querySelector("video");
        if (video) {
          video.remove();
          img.style.display = "block";
        }
      });
    });
  }
  VideoPlay();
});

document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll("ul.tabs li");
  var contents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var tab_id = this.getAttribute("data-tab");

      tabs.forEach(function (item) {
        item.classList.remove("current");
      });

      contents.forEach(function (content) {
        content.classList.remove("current");
      });

      this.classList.add("current");
      document.getElementById(tab_id).classList.add("current");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");

  dropdownLinks.forEach((link) => {
    link.textContent = link.textContent.replace(/\s?>$/, ""); // Removes " >" from the end
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = "/assets/favicon.ico"; // Update with the actual path
  link.type = "image/x-icon";
  document.head.appendChild(link);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu containers with the class "menu-top-1a"
  const menus = document.querySelectorAll(".menu-top-1a");

  menus.forEach(function (menu) {
    // Create the "Blogs" menu item dynamically
    const blogsLink = document.createElement("li");
    blogsLink.classList.add("dropbtn");

    // Check if we're in a subfolder (i.e., not the root directory)
    const blogsPath = window.location.pathname.includes("/")
      ? "../blogs.html"
      : "./blogs.html";

    // Set the "Blogs" link
    blogsLink.innerHTML = `<a href="${blogsPath}">Blogs</a>`;

    // Find the last menu item and insert the new link before it
    const lastItem = menu.querySelector("li:last-child");
    menu.insertBefore(blogsLink, lastItem);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the menu container
  const menu = document.querySelector(".menu-top-1a");

  if (menu) {
    // Create the "Internship and Career Services" menu item dynamically
    const careerLink = document.createElement("li");
    careerLink.classList.add("dropbtn");

    // Check if we're in a subfolder (i.e., not the root directory)
    const careerPath = window.location.pathname.includes("/")
      ? "../career-services-and-placement.html"
      : "./career-services-and-placement.html";

    // Set the "Internship and Career Services" link
    careerLink.innerHTML = `<a href="${careerPath}">Internship and Career Services</a>`;

    // Find the sixth menu item ("Collaborations")
    const collaborationsTab = menu.querySelector("li:nth-child(5)");

    if (collaborationsTab) {
      // Insert the new menu item after the sixth item
      collaborationsTab.insertAdjacentElement("afterend", careerLink);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all <h3> elements within any footer row
  const footerHeadings = document.querySelectorAll(".footer-row h3");

  footerHeadings.forEach(function (heading) {
    // Check if the heading contains the specific text you want to target
    if (heading.textContent.trim() === "Law School of the Future") {
      // Create a new <h2> element
      const newHeading = document.createElement("h2");
      newHeading.textContent = heading.textContent;

      // Replace the <h3> with the new <h2>
      heading.parentNode.replaceChild(newHeading, heading);
    }
  });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Create and append the div element
  var chatDiv = document.createElement("div");
  chatDiv.className = "npf_chatbots";
  chatDiv.setAttribute("data-w", "1189388fc18c4ac0952bc3816b615524");
  chatDiv.style.display = "none";
  document.body.appendChild(chatDiv);

  // Create and append the script element
  var chatbotScript = document.createElement("script");
  chatbotScript.type = "text/javascript";
  chatbotScript.async = true;
  chatbotScript.src =
    "https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/5747642c1669bd257/1189388fc18c4ac0952bc3816b615524";
  document.body.appendChild(chatbotScript);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the footer element
  const footer = document.querySelector(".foot-bottom");

  if (footer) {
    // Determine the correct path for the links based on the current directory structure
    const privacyPolicyPath = window.location.pathname.includes("/")
      ? "../privacy-policy.html"
      : "./privacy-policy.html";

    const termsConditionsPath = window.location.pathname.includes("/")
      ? "../terms-conditions.html"
      : "./terms-conditions.html";

    // Create the "Privacy Policy" link
    const privacyPolicyLink = document.createElement("a");
    privacyPolicyLink.href = privacyPolicyPath;
    privacyPolicyLink.textContent = "Privacy Policy";

    // Create the "Terms and Conditions" link
    const termsConditionsLink = document.createElement("a");
    termsConditionsLink.href = termsConditionsPath;
    termsConditionsLink.textContent = "Terms and Conditions";

    // Insert the links before the Copyright text
    const copyrightElement = footer.querySelector("a:nth-child(2)");
    if (copyrightElement) {
      footer.insertBefore(privacyPolicyLink, copyrightElement);
      footer.insertBefore(termsConditionsLink, copyrightElement);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Ensure the <head> section is targeted
  const head = document.head;

  if (head) {
    // Get the current URL for the canonical tag
    const currentUrl = window.location.origin + window.location.pathname;

    // Create and add the Robots meta tag
    const robotsMeta = document.createElement("meta");
    robotsMeta.name = "robots";
    robotsMeta.content = "index, follow";
    head.appendChild(robotsMeta);

    // Create and add the Canonical link tag
    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = currentUrl;
    head.appendChild(canonicalLink);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the social links container
  const socialLinks = document.querySelector(".social-links-footer");

  if (socialLinks) {
    // Determine the correct path for the YouTube image dynamically
    const youtubeImagePath = window.location.pathname.includes("/")
      ? "../assets/last/yt.png"
      : "./assets/last/yt.png";

    // Create a new anchor tag
    const youtubeLink = document.createElement("a");
    youtubeLink.href = "https://www.youtube.com/@Vinayakamission85";
    youtubeLink.target = "_blank";

    // Create a new image element for the anchor tag
    const youtubeImage = document.createElement("img");
    youtubeImage.src = youtubeImagePath;
    youtubeImage.alt = "YouTube";

    // Append the image to the anchor tag
    youtubeLink.appendChild(youtubeImage);

    // Append the anchor tag to the social links container
    socialLinks.appendChild(youtubeLink);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const baseCount = 400; // Base count starts at 400 globally
  const pageId = window.location.pathname; // Unique identifier per blog page
  let views = localStorage.getItem(pageId);

  if (views === null) {
    views = 0; // Start counting from 0 but base count is 400
  } else {
    views = parseInt(views) + 1; // Increment views
  }

  localStorage.setItem(pageId, views); // Store in localStorage
  document.getElementById("views-count").textContent = baseCount + views; // Display total count
});

document.addEventListener("DOMContentLoaded", function () {
  const pageId = window.location.pathname; // Unique identifier per blog page

  const filterPage = pageId
    .replace("/blogs/", "")
    .replace(".html", "")
    .replace(/-/g, " ");

  document.getElementById("current-blog-page").textContent = filterPage; // Update UI
});

document.addEventListener("DOMContentLoaded", function () {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  // Update hrefs with current page URL and title
  document.querySelectorAll(".social-share a").forEach((link) => {
    link.href = link.href.replace("{URL}", url).replace("{TITLE}", title);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function createWhatsAppButton() {
    const button = document.createElement("div");
    button.id = "whatsapp-button";
    button.innerHTML =
      '<a href="https://wa.me/917358201234" target="_blank" id="whatsapp-link"><i class="fab fa-whatsapp"></i></a>';
    document.body.appendChild(button);
  }
  createWhatsAppButton();
});

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if current page is homepage (customize this condition as needed)
  const isHomepage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html" ||
    window.location.pathname === "";

  // Inject CSS styles
  const style = document.createElement("style");
  style.textContent = `
    /* Popup Overlay */
    #vmls-popup {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 9999;
      justify-content: center;
      align-items: center;
    }

    /* Popup Container */
    #vmls-popup .popup-container {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }

    /* Popup Image */
    #vmls-popup-image {
      max-width: 90vw;
      max-height: 90vh;
      border: 2px solid #8d191c;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    /* Close Button */
    #vmls-popup-close {
      position: absolute;
      top: -15px;
      right: -15px;
      background: #8d191c;
      color: white;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      transition: transform 0.2s;
    }

    #vmls-popup-close:hover {
      transform: scale(1.1);
    }

    /* Notification */
    #vmls-notification {
      position: fixed;
      bottom: 4%;
  left: 7%;
      background-color: #8d191c;
      color: white;
      padding: 12px 20px;
      border-radius: 4px;
      cursor: pointer;
      z-index: 9998;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    #vmls-notification:hover {
      background-color: #6e1215;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  `;
  document.head.appendChild(style);

  // Create notification element (appears on all pages)
  const notification = document.createElement("div");
  notification.id = "vmls-notification";
  notification.textContent = "Sattam Pesavom";
  document.body.appendChild(notification);

  // Only create popup if on homepage
  if (isHomepage) {
    // Create popup elements
    const popup = document.createElement("div");
    popup.id = "vmls-popup";
    popup.innerHTML = `
      <div class="popup-container">
        <img id="vmls-popup-image" src="/public/popup.jpeg" alt="Popup Image">
        <button id="vmls-popup-close">×</button>
      </div>
    `;
    document.body.appendChild(popup);

    // Get popup elements
    const closeButton = document.getElementById("vmls-popup-close");
    const popupImage = document.getElementById("vmls-popup-image");

    // Function to show popup
    function showPopup() {
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    // Function to hide popup
    function hidePopup() {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }

    // Show popup on page load after delay
    setTimeout(showPopup, 1000);

    // Close button event
    closeButton.addEventListener("click", hidePopup);

    // Close when clicking outside image
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        hidePopup();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        hidePopup();
      }
    });
  }

  // Notification click event (works on all pages)
  notification.addEventListener("click", function () {
    if (isHomepage) {
      // On homepage, show the popup
      const popup = document.getElementById("vmls-popup");
      if (popup) {
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    } else {
      // On other pages, you could:
      // 1. Redirect to homepage
      window.location.href = "/";
      // OR 2. Show a different popup
      // alert('Please visit our homepage for this offer');
    }
  });
});
