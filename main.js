const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const data = [
  {
    id: 1,
    title: "Website Design",

    Image: "./pic/vegetable.webp",
    category: "web",
    head: "Visit Our Repositery",
  },
  {
    id: 2,
    title: "Website Design",

    Image: "./pic/food.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/BreadShop",
  },
  {
    id: 3,
    title: "Website Design",

    Image: "./pic/coffee-.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/CoffeeKtri.github.io",
  },
  {
    id: 4,
    title: "Website Design",

    Image: "./pic/bakery.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/BreadShop",
  },
  {
    id: 5,
    title: "Website Design",

    Image: "./pic/hospital.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/hospital",
  },
  {
    id: 6,
    title: "Website Design",
    Image: "./pic/car.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/CarShop",
  },
  {
    id: 7,
    title: "Website Design",
    Image: "./pic/drinking.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/WaterShop",
  },
  {
    id: 8,
    title: "Website Design",
    Image: "./pic/ai.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/AI",
  },
  {
    id: 9,
    title: "Website Design",
    Image: "./pic/consultancy.webp",
    category: "web",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/bussnieus.github.io",
  },

  {
    id: 10,
    title: "Graphic Design",
    Image: "./pic/khmer.jpg",
    category: "graphic",
    head: "Visit Our Repositery",
  },
  {
    id: 11,
    title: "Digital Marketing",
    Image: "./pic/smart.jpg",
    category: "graphic",
    head: "Visit Our Repositery",
  },
  {
    id: 12,
    title: "Digital Marketing",
    Image: "./pic/Happy.jpg",
    category: "graphic",
    head: "Visit Our Repositery",
  },
  {
    id: 13,
    title: "Website Design",

    Image: "./pic/aupp.png",
    category: "app",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/AuppClone",
  },
  {
    id: 14,
    title: "Website Design",

    Image: "./pic/CodeMaster.png",
    category: "app",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/WebTeam",
  },
  {
    id: 15,
    title: "Website Design",
    Image: "./pic/Ecomerce.png",
    category: "app",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/EcommerceJs",
  },
  {
    id: 17,
    title: "Digital Marketing",
    Image: "./pic/image.png",
    category: "app",
    head: "Visit Our Repositery",
    link: "https://daily-app-fjij.vercel.app/",
  },
  {
    id: 18,
    title: "Website Design",
    Image: "./pic/Loan.png",
    category: "app",
    head: "Visit Our Repositery",
    link: "https://github.com/sengtri457/LoanMidterm",
  },
];

const ul = document.querySelector(".portfolio-flters");
const li = document.querySelectorAll(".custom-cursor-on-hover");
const menuwrapper = document.querySelector(".menuwrapper");

const displayItems = (items) => {
  const showing = items
    .map((item) => {
      return `
      <div class="col-lg-4 col-sm-12 col-md-12 mb-3 mb-sm-3 mb-md-3 mb-lg-3">
        <div class="portfolio-item">
          <img src="${item.Image}" class="h-auto w-100 img-fluid" alt="${item.title}" />
          <a href="${item.link}" class="link-pre text-decoration-none"><i class="fa-solid fa-eye"></i></a>
          <div class="content-port">
            <h2>${item.head}</h2>
            <h4>${item.title}</h4>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
  menuwrapper.innerHTML = showing;
};

window.addEventListener("DOMContentLoaded", () => {
  displayItems(data.filter((item) => item.id < 100));
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = data.filter((item) => item.category === categories);

    if (categories === "all") {
      displayItems(data.filter((item) => item.id < 100));
    } else {
      displayItems(newdata);
    }
  });
});
li.forEach((item) => {
  item.addEventListener("click", (e) => {
    li.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    const categories = e.target.dataset.id;
    const newdata = data.filter((item) => item.category === categories);

    if (categories === "all") {
      displayItems(data.filter((item) => item.id < 100));
    } else {
      displayItems(newdata);
    }
  });
});

// back-to-top

let isScrolling;
const $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function () {
  clearTimeout(isScrolling);
  $backToTop.fadeIn("slow");
  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});
$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1700, "easeInOutExpo");
});

// search
const modal = document.querySelector(".modal");
const input = document.querySelector(".inputt");
const sections = {
  about: document.getElementById("about"),
  exp: document.getElementById("exp"),
  service: document.getElementById("service"),
  portfolio: document.getElementById("portfolio"),
  contact: document.getElementById("contact"),
};

window.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = input.value.toLowerCase();
      Object.keys(sections).forEach((key) => {
        if (inputValue === key) {
          sections[key].scrollIntoView({ behavior: "smooth" });
        }
      });
      input.value = "";
      input.blur();
      document.querySelector(".search-form").classList.remove("open");
      modal.classList.remove("show"); // Close the modal
    }
  });
  input.addEventListener("blur", () => {
    input.value = "";
    document.querySelector(".search-form").classList.remove("open");
    modal.classList.remove("show"); // Close the modal on blur
  });
});
// dark moce

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

document.addEventListener("DOMContentLoaded", () => {
  darkModeButton.innerText = "Toggle Dark Mode";
  darkModeButton.classList.add(
    "btn",
    "btn-dark",
    "position-fixed",
    "top-0",
    "end-0",
    "m-3"
  );
  darkModeButton.onclick = toggleDarkMode;
  document.body.appendChild(darkModeButton);
});

var pre = document.getElementById("preloader");
window.addEventListener("load", function () {
  pre.style.display = "none";
});

const model = document.querySelector(".modal");

// Dw CV
document.querySelector(".btn-CV").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./pic/BunSengtri_CV.pdf"; // Replace with the actual file path
  link.download = "BunSengtri_CV.pdf"; // Rename file when downloaded (optional)
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const light = document.querySelector(".light");
function moveLight(event) {
  const x = event.clientX;
  const y = event.clientY;
  light.style.left = `${x}px`;
  light.style.top = `${y}px`;
}
document.addEventListener("mousemove", moveLight);
// Get progress bar and indicator elements
const progressBar = document.getElementById("progressBar");
const scrollIndicator = document.getElementById("scrollIndicator");

// Function to update progress bar
function updateProgressBar() {
  // Calculate scroll progress
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / documentHeight) * 100;

  // Update progress bar width
  progressBar.style.width = scrollPercent + "%";

  // Update percentage indicator - only show between 1% and 99%
  const roundedPercent = Math.round(scrollPercent);
  if (roundedPercent >= 1 && roundedPercent <= 99) {
    scrollIndicator.style.display = "block";
    scrollIndicator.textContent = roundedPercent + "%";
  } else {
    scrollIndicator.style.display = "none";
  }
}

// Optimized scroll event listener using requestAnimationFrame
let ticking = false;

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateProgressBar);
    ticking = true;
  }
}

window.addEventListener("scroll", function () {
  requestTick();
  ticking = false;
});

// Initialize progress bar on page load
window.addEventListener("load", updateProgressBar);

// Handle window resize
window.addEventListener("resize", updateProgressBar);

// Optional: Add click functionality to jump to specific sections
progressBar.addEventListener("click", function (e) {
  const rect = this.getBoundingClientRect();
  const clickPosition = (e.clientX - rect.left) / rect.width;
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const targetScrollPosition = documentHeight * clickPosition;

  window.scrollTo({
    top: targetScrollPosition,
    behavior: "smooth",
  });
});

// Add hover effect to progress bar
progressBar.addEventListener("mouseenter", function () {
  this.style.cursor = "pointer";
  this.style.transform = "scaleY(1.5)";
  this.style.transition = "transform 0.2s ease";
});

progressBar.addEventListener("mouseleave", function () {
  this.style.transform = "scaleY(1)";
});
