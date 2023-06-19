// https://mikylefourie.github.io/index.html
// https://mikylefourie.github.io/html%20files/devlogs.html
// https://mikylefourie.github.io/html%20files/design.html
// https://mikylefourie.github.io/html%20files/essay.html
// https://mikylefourie.github.io/html%20files/portfolio.html

const homeLink = document.getElementById("home_link");
homeLink.addEventListener("click", () => {
  window.location.replace("https://mikylefourie.github.io/index.html");
});

const devLogLink = document.getElementById("devlog_link");
devLogLink.addEventListener("click", () => {
  window.location.replace(
    "https://mikylefourie.github.io/html%20files/devlogs.html"
  );
});

const designLink = document.getElementById("design_link");
designLink.addEventListener("click", () => {
  window.location.replace(
    "https://mikylefourie.github.io/html%20files/design.html"
  );
});

const essayLink = document.getElementById("essay_link");
essayLink.addEventListener("click", () => {
  window.location.replace(
    "https://mikylefourie.github.io/html%20files/essay.html"
  );
});

const portfolioLink = document.getElementById("portfolio_link");
essayLink.addEventListener("click", () => {
  window.location.replace(
    "https://mikylefourie.github.io/html%20files/portfolio.html"
  );
});

const navSlide = () => {
  const burger = document.querySelector(".BurgerButton");
  const nav = document.querySelector(".RightSide");
  const theHeader = document.querySelector(".TheHeader");
  const navLinks = document.querySelectorAll(".RightSide li");

  //Function adds a class to the Nav that changes it to "mobile form"
  burger.addEventListener("click", () => {
    nav.classList.toggle("NavActive");
    theHeader.classList.toggle("hdrMutate");

    //adds an animation to each of the navLinks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
  });
};

navSlide();
