const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const gsapProject = document.querySelectorAll(".fade");
gsapProject.forEach((el) => observer.observe(el));


// let MyCardGsap = gsap.timeline({ defaults: { duration: 1, opacity: 1 } });

// MyCardGsap
// .to('.gsap-fade', { stagger: 0.25 })
// .to('.hero__bottom-left', {y: 0}, "<")
// .to('.hero__hello', {opacity: 1}, '<.5')
// .to('.hero__world', {opacity:1}, '<1')

/* Modal Text-me */

const textMeBtn = document.querySelector(".hero__text-me");
const modalTextMe = document.querySelector(".modal__text-me");
const modalCrosBtn = document.querySelector(".modal__close-btn");
const modalForm = document.querySelector(".modal__massage");
const myPhoto = document.querySelector(".hero__right");
const I_AM_TYPING = "url('../img/hero__i-am-typing.png')";


modalForm.addEventListener('focus', function() {
document.getElementById("i-am").style.backgroundImage = I_AM_TYPING;
})

textMeBtn.addEventListener("click", function () {
  modalTextMe.classList.toggle("modal__text-me--active");
  myPhoto.style = '';
});

modalCrosBtn.addEventListener("click", function () {
  modalTextMe.classList.remove("modal__text-me--active");
  myPhoto.style = '';
});

/* Modal validation */

new window.JustValidate(".modal__form-valid", {
  rules: {
    text: {
      required: true,
      minLength: 10,
      maxLength: 300,
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    email: {
      required: true,
      email: true,
      maxLength: 20,
    },
  },

  colorWrong: "#C04000",
  messages: {
    text: {
      required: "Опишите пожалуйста проект",
      minLength: "Недостасточно символов",
      maxLength: "Превышен лимит символов",
    },
    name: {
      required: "Вы не ввели имя",
      minLength: "Имя должно содержать минимум 2 символа",
      maxLength: "Превышен лимит символов",
    },
    email: {
      required: "Вы не ввели e-mail",
      email: "Некорректный e-mail",
      maxLength: "Превышен лимит символов",
    },
  },
});

/* scroll to top */

const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

/* Swiper-skills */

const swiper_skills = new Swiper('.swiper-skills', {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  autoplay: {
    speed: 5000,
  },
});



/* Swiper-portfolio */

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
