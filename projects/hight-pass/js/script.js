const headerSearch = document.querySelector(".header__loupe");
const headerInput = document.querySelector(".header__input");

headerSearch.addEventListener("click", function () {
  headerInput.classList.toggle("active");
  headerSearch.classList.toggle("active");
});

const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  headerBurger.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const gsapProject = document.querySelectorAll(".reveal");
gsapProject.forEach((el) => observer.observe(el));

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76931, 37.638628],
    zoom: 10,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark(
    [55.76931, 37.638628],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map-object.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}

const closeInnerMap = document.querySelector(".contacts__close-inner");
const innerMap = document.querySelector(".contacts__map-inner-wrapper");
const mapPhoneNumber = document.querySelector(".hidden-phone");

closeInnerMap.addEventListener("click", function () {
  innerMap.classList.add("active");
  mapPhoneNumber.classList.add("active");
});

new JustValidate(".contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    email: {
      required: true,
      email: true,
    },
    text: {
      required: true,
      minLength: 5,
      maxLength: 300,
    },
  },

  colorWrong: "#FF3030",
  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Имя должно содержать минимум 2 символа",
      maxLength: "Превышен лимит в 15 символов",
    },
    email: {
      required: "Вы не ввели e-mail",
      email: "Некорректный e-mail",
    },
    text: {
      required: "Вы не оставили комментарий",
      minLength: "Недостасточно символов",
      maxLength: "Превышен лимит в 300 символов",
    },
  },
});

const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

document.querySelectorAll(".clamp").forEach(function (descr) {
  $clamp(descr, {
    clamp: "auto",
    useNativeClamp: true,
  });
});
