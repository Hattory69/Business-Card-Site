/* burger */

const burgerBtn = document.querySelector(".header__burger");
const burgerNav = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  burgerNav.classList.toggle("header__nav--active");
});

document.querySelectorAll(".header__link").forEach(function (burgerItem) {
  burgerItem.addEventListener("click", function () {
    burgerBtn.classList.remove("active");
    burgerNav.classList.remove("header__nav--active");
  });
});

/* swiper What we give */

const swiper = new Swiper(".what-we-give__swiper-content", {
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    speed: 5000,
  },

  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".what-we-give__button-next",
    prevEl: ".what-we-give__button-prev",
  },
});

/* log in */

const logInBtn = document.querySelector(".header__login");
const logInNod = document.querySelector(".log-in");
const logInWindow = document.querySelector(".log-in__window");

const hiddenBody = document.querySelector("body");

logInBtn.addEventListener("click", function () {
  logInNod.classList.add("active");
  logInWindow.classList.add("active");
  hiddenBody.classList.add("body-hidden");
});

document
  .querySelectorAll(".popup-closeBtn")
  .forEach(function (closePopupWindow) {
    closePopupWindow.addEventListener("click", function () {
      logInNod.classList.remove("active");
      logInWindow.classList.remove("active");
      hiddenBody.classList.remove("body-hidden");
      registrationNod.classList.remove("active");
      registrationWindow.classList.remove("active");
      hiddenBody.classList.remove("body-hidden");
    });
  });

/* show password */

document.querySelectorAll(".password-eye").forEach(function (showPassword) {
  showPassword.addEventListener("click", function () {
    document
      .querySelectorAll(".password-field")
      .forEach(function (passwordField) {
        const type =
          passwordField.getAttribute("type") === "password"
            ? "text"
            : "password";
        passwordField.setAttribute("type", type);
        showPassword.classList.toggle("active");
      });
  });
});

/* registration */

const registrBtn = document.querySelector(".header__register");
const registrationNod = document.querySelector(".registration");
const registrationWindow = document.querySelector(".registration__window");

registrBtn.addEventListener("click", function () {
  registrationNod.classList.add("active");
  registrationWindow.classList.add("active");
  hiddenBody.classList.add("body-hidden");
});

/* privacy */

const privacyField = document.querySelector(".registration__privacy");
const parvacyFieldCross = document.querySelector(
  ".registration__close-privacy"
);

parvacyFieldCross.addEventListener("click", function () {
  privacyField.classList.add("registration__privacy--active");
});

/* inputmask */

const regi_swiper = new Swiper(".registration__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: false,
  navigation: {
    nextEl: ".registration__next-button",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

const selector = document.querySelector(".registration__phone-num");
const im = new Inputmask("(999)-999-99-99");
im.mask(selector);

new JustValidate(".registration__form", {
  rules: {
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
});

const registrPhoneField = document.querySelector(".registration__phone-num");
const registrCodeField = document.querySelector(".registration__code-field");
const regNextBtn = document.querySelectorAll(".registration__next-button");

document
  .querySelectorAll(".registration__next-button")
  .forEach(function (regBtnTest) {
    regBtnTest.addEventListener("click", function () {
      for (index = 0; index < regNextBtn.length; index++) {
        regNextBtn[index].setAttribute("disabled", "disabled");
        regNextBtn[index].classList.remove("registration__next-button--active");
      }
    });
  });

for (index = 0; index < regNextBtn.length; index++) {
  regNextBtn[index].setAttribute("disabled", "disabled");
}

function attributeFun(e) {
  this.setAttribute("disabled", "disabled");
}

registrPhoneField.addEventListener("keydown", function () {
  if (registrPhoneField.inputmask.unmaskedvalue().length === 10) {
    document
      .querySelectorAll(".registration__next-button")
      .forEach(function (registrNextBtn) {
        registrNextBtn.removeAttribute("disabled");
        registrNextBtn.classList.add("registration__next-button--active");
      });
  } else {
    document
      .querySelectorAll(".registration__next-button")
      .forEach(function (registrNextBtn) {
        registrNextBtn.setAttribute("disabled", "disabled");
        registrNextBtn.classList.remove("registration__next-button--active");
      });
  }
});

registrCodeField.addEventListener("keyup", function () {
  if (registrCodeField.value.length === 4) {
    document
      .querySelectorAll(".registration__next-button")
      .forEach(function (registrNextBtn) {
        registrNextBtn.removeAttribute("disabled");
        registrNextBtn.classList.add("registration__next-button--active");
      });
  } else {
    document
      .querySelectorAll(".registration__next-button")
      .forEach(function (registrNextBtn) {
        registrNextBtn.setAttribute("disabled", "disabled");
        registrNextBtn.classList.remove("registration__next-button--active");
      });
  }
});

/* coundown */

let countdownTime = 60;
const registrCountdowun = document.querySelector(".registration__countdown");
const countdownBtn = document.querySelector(".countdown");
const resendCodeBtn = document.querySelector(".registration__resending");
resendCodeBtn.disabled = true;

function updateCountdown() {
  if (countdownTime >= 0) {
    registrCountdowun.innerHTML = `${countdownTime}sec`;
    countdownTime--;
    resendCodeBtn.disabled = true;
  } else {
    resendCodeBtn.disabled = false;
  }
}

countdownBtn.addEventListener("click", function () {
  setInterval(updateCountdown, 1000);
});

resendCodeBtn.addEventListener("click", function () {
  countdownTime = 60;
  setInterval(updateCountdown, 1000);
});

/* Swiper */

const courses_swiper = new Swiper(".available-courses__left", {
  breakpoints: {
    0: {
      enabled: true,
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    993: {
      enabled: false,
    },
  },

  navigation: {
    nextEl: ".available-courses__button-next",
    prevEl: ".available-courses__button-prev",
  },
});

/* to-top */

const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});
