document.addEventListener("DOMContentLoaded", function () {
  // Detect if the page is in a subfolder
  let isRoot = window.location.pathname.split("/").length <= 2; // Checks if the URL has only one slash after domain

  // Set the correct fetch path
  let footerPath = isRoot ? "footer.html" : "../footer.html"; // Adjust path based on location

  fetch(footerPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      let footerElements = document.getElementsByClassName("footer");
      if (footerElements.length > 0) {
        Array.from(footerElements).forEach((footer) => {
          footer.innerHTML = data; // Replace ALL footers with the loaded content
        });

        // Adjust image and link paths dynamically
        document.querySelectorAll(".footer img").forEach((img) => {
          let src = img.getAttribute("src");
          if (src && (src.startsWith("./") || src.startsWith("../"))) {
            img.setAttribute(
              "src",
              isRoot ? src.replace("../", "./") : src.replace("./", "../")
            );
          }
        });

        document.querySelectorAll(".footer a").forEach((link) => {
          let href = link.getAttribute("href");
          if (href && (href.startsWith("./") || href.startsWith("../"))) {
            link.setAttribute(
              "href",
              isRoot ? href.replace("../", "./") : href.replace("./", "../")
            );
          }
        });
      }
    })
    .catch((error) => console.error("Error loading footer:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  let isRoot = window.location.pathname.split("/").length <= 2;
  let menuPath = isRoot ? "menu.html" : "../menu.html";

  fetch(menuPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      let menuElements = document.querySelectorAll("#menu-content"); // Select all menu containers
      if (menuElements.length > 0) {
        menuElements.forEach((menu) => {
          menu.innerHTML = data;

          // **Update dynamic paths after inserting menu**
          menu.querySelectorAll("img").forEach((img) => {
            let src = img.getAttribute("src");
            if (src && !src.startsWith("http")) {
              img.src = isRoot ? src : "../" + src; // Adjust relative paths
            }
          });

          menu.querySelectorAll("a").forEach((link) => {
            let href = link.getAttribute("href");
            if (href && !href.startsWith("http") && !href.startsWith("#")) {
              link.href = isRoot ? href : "../" + href; // Adjust relative paths
            }
          });
        });

        // After menu is loaded, add event listeners
        attachMenuEvents();
      }
    })
    .catch((error) => console.error("Error loading menu:", error));

  function attachMenuEvents() {
    const menus = document.querySelectorAll(".topbar-right-img");
    const closeBtns = document.querySelectorAll(".close-btn");
    const menuContents = document.querySelectorAll(".menu");

    menus.forEach((menu, index) => {
      menu.addEventListener("click", function () {
        menuContents[index].style.setProperty("left", "0", "important");
        menuContents[index].classList.add("active");
      });
    });

    closeBtns.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        menuContents.forEach((content) => {
          content.style.left = "-200vw";
        });
        menuContents[index].classList.remove("active");
      });
    });
  }
});
