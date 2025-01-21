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
    title: "Web Development",
    Image: "./pic/vegetable.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 2,
    title: "App Development",
    Image: "./pic/food.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 3,
    title: "Web Design",
    Image: "./pic/coffee-.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 4,
    title: "Digital Marketing",
    Image: "./pic/bakery.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 5,
    title: "Digital Marketing",
    Image: "./pic/hospital.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 6,
    title: "App Design",
    Image: "./pic/car.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 7,
    title: "App Design",
    Image: "./pic/drinking.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 8,
    title: "App Design",
    Image: "./pic/ai.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 9,
    title: "App Design",
    Image: "./pic/consultancy.webp",
    category: "web",
    head: "Maecenas a tempus tortor",
  },

  {
    id: 10,
    title: "Graphic Design",
    Image: "./pic/khmer.jpg",
    category: "graphic",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 11,
    title: "Digital Marketing",
    Image: "./pic/smart.jpg",
    category: "graphic",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 12,
    title: "Digital Marketing",
    Image: "./pic/Happy.jpg",
    category: "graphic",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 13,
    title: "Digital Marketing",
    Image: "./pic/bakery.webp",
    category: "app",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 14,
    title: "Digital Marketing",
    Image: "./pic/hospital.webp",
    category: "app",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 15,
    title: "App Design",
    Image: "./pic/car.webp",
    category: "app",
    head: "Maecenas a tempus tortor",
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
          <a href="img/portfolio-1.jpg" class="link-pre text-decoration-none"><i class="fa-solid fa-eye"></i></a>
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
  displayItems(data);
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = data.filter((item) => item.category === categories);

    if (categories === "all") {
      displayItems(data);
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
      displayItems(data);
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
const input = document.querySelector(".form-control");
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
