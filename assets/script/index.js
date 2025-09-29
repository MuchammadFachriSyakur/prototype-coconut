const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  const video = document.getElementById("gallery-video");
  if (e.target.classList.contains("close-btn")) {
    video.pause();
    video.currentTime = 0;
  }
});

function setLanguage(lang) {
  document.getElementById("title-web").innerText = company.companyName[lang];

  document.getElementById("nav-home").innerText = content.navbar.home[lang];
  document.getElementById("nav-about").innerText = content.navbar.about[lang];
  document.getElementById("nav-products").innerText =
    content.navbar.products[lang];
  document.getElementById("nav-gallery").innerText =
    content.navbar.gallery[lang];
  document.getElementById("nav-contact").innerText =
    content.navbar.contact[lang];

  document.getElementById("company-name").innerText = company.companyName[lang];
  document.getElementById("hero-title").innerText = company.heroTitle[lang];
  document.getElementById("hero-tagline").innerText = company.tagline[lang];
  document.getElementById("company-description").innerText =
    company.description[lang];
  document.getElementById("cta-btn").innerText = content.ctaHero[lang];

  document.getElementById("about-title").innerText = content.aboutUs[lang];
  document.getElementById("products-title").innerText =
    content.ourProduct[lang];
  document.getElementById("gallery-title").innerText = content.gallery[lang];
  document.getElementById("contact-title").innerText =
    content.contact.getInTouch[lang];
  document.getElementById("contact-subtitle").innerText =
    content.contact.subtitle[lang];
  document.getElementById("contact-info").innerText =
    content.contact.infoContact[lang];

  const form = content.contact.form;
  document.querySelector(".contact-form label[for='name']").innerText =
    form.nameLabel[lang];
  document.querySelector(".contact-form input[type='text']").placeholder =
    form.namePlaceholder[lang];

  document.querySelector(".contact-form label[for='email']").innerText =
    form.emailLabel[lang];
  document.querySelector(".contact-form input[type='email']").placeholder =
    form.emailPlaceholder[lang];

  document.querySelector(".contact-form label[for='message']").innerText =
    form.messageLabel[lang];
  document.querySelector(".contact-form textarea").placeholder =
    form.messagePlaceholder[lang];
  document.querySelector(".contact-form button").innerText = form.button[lang];

  document.getElementById("contact-addres").innerText =
    company.contact.addres[lang];
  document.getElementById("contact-email").innerText = company.contact.email;
  document.getElementById("contact-phone").innerText = company.contact.phone;

  document.getElementById("footer-company-name").innerText =
    company.companyName[lang];
  document.getElementById("footer-home").innerText = content.navbar.home[lang];
  document.getElementById("footer-about").innerText =
    content.navbar.about[lang];
  document.getElementById("footer-products").innerText =
    content.navbar.gallery[lang];
  document.getElementById("footer-gallery").innerText =
    content.navbar.gallery[lang];
  document.getElementById("footer-contact").innerText =
    content.navbar.contact[lang];
  document.getElementById("footer-by").innerText = content.footer.by[lang];
  company.companyName[lang];
  document.getElementById("footer-cp").innerText =
    content.footer.allRight[lang];
}

function renderProducts(lang) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = ""; // clear dulu biar gak dobel

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="assets/image/${product.image}" alt="${product.title[lang]}" />
      <h3>${product.title[lang]}</h3>
      <p>${product.shortDescription[lang]}</p>
      <a href="details-product.html?id=${product.id}">
        <button>${content.readMore[lang]}</button>
      </a>
    `;

    grid.appendChild(card);
  });
}

const savedLang = localStorage.getItem("selectedLang") || "id";

document.getElementById("lang-switch").value = savedLang;

setLanguage(savedLang);
renderProducts(savedLang);

document.getElementById("lang-switch").addEventListener("change", function () {
  const selectedLang = this.value;
  localStorage.setItem("selectedLang", selectedLang); // <--- simpan ke localStorage
  setLanguage(selectedLang);
  renderProducts(selectedLang);
});
