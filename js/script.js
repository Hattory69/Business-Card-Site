const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const gsapProject = document.querySelectorAll(".fade");
gsapProject.forEach((el) => observer.observe(el));

new window.JustValidate(".contacts__form-valid", {
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
      maxLength: 30,
    },
  },

  colorWrong: "#dc143c",
  messages: {
    text: {
      required: "Опишите пожалуйста проект",
      minLength: "Чуть подробнее",
      maxLength: "Превышен лимит в 300 символов",
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

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

const showHero = document.querySelector(".hero-js");
const heroNod = document.querySelector(".hero");

showHero.addEventListener("click", function () {
  heroNod.classList.add("active");
  skillsNod.classList.remove("active");
  portfolioNod.classList.remove("active");
  contactsNod.classList.remove("active");
});

const showSkills = document.querySelector(".skills-js");
const skillsNod = document.querySelector(".skills");

showSkills.addEventListener("click", function () {
  skillsNod.classList.add("active");
  heroNod.classList.remove("active");
  portfolioNod.classList.remove("active");
  contactsNod.classList.remove("active");
});

const showPortfolio = document.querySelector(".portfolio-js");
const portfolioNod = document.querySelector(".portfolio");

showPortfolio.addEventListener("click", function () {
  portfolioNod.classList.add("active");
  skillsNod.classList.remove("active");
  heroNod.classList.remove("active");
  contactsNod.classList.remove("active");
});

const showContacts = document.querySelector(".contacts-js");
const contactsNod = document.querySelector(".contacts");

showContacts.addEventListener("click", function () {
  contactsNod.classList.add("active");
  skillsNod.classList.remove("active");
  heroNod.classList.remove("active");
  portfolioNod.classList.remove("active");
});

const headDoodle = document.querySelector(".my-head");

headDoodle.addEventListener("click", function () {
  headDoodle.classList.toggle("show");
});

// game

const startGame = document.querySelector(".start-game");
let isGameActive = false;
let maxWidth = 90;
let minWidth = 0;

startGame.addEventListener("click", function () {
  isGameActive = !isGameActive;
  if (isGameActive === true) {
    headDoodle.addEventListener("mouseover", dudleGame);
  } else {
    document.body.onmousemove = () => {
    headDoodle.removeEventListener("mouseover", dudleGame);
      stopGame();
    };
  }
});

function dudleGame(event) {
  mouseHummer();
  headDoodle.classList.add("hide");
  setTimeout(() => {
    headDoodle.style = `right: ${
      Math.random() * (maxWidth - minWidth) + minWidth
    }%;
    cursor: url('../img/hammer-down.svg'), auto;`
    headDoodle.classList.add("show");
    headDoodle.classList.remove("hide");
    // headDoodle.style = `cursor: url('../img/hammer-down.svg'), auto;`;
  }, 1000);
}

function mouseHummer(event) {
  document.body.onmousedown = () => {
    document.body.style = `cursor: url('../img/hammer-down.svg'), auto;`;
  };

  document.body.onmouseup = () => {
    document.body.style = `cursor: url('../img/hammer.svg'), auto;`;
  };

  document.body.onmousemove = () => {
    document.body.style = `cursor: url('../img/hammer.svg'), auto;`;
  };
}

function stopGame(event) {
  document.body.onmousedown = () => {
    document.body.style = `cursor: default;`;
  };

  document.body.onmouseup = () => {
    document.body.style = `cursor: default;`;
  };

  document.body.onmousemove = () => {
    document.body.style = `cursor: default;`;
  };

  headDoodle.style = `cursor: auto;
  transition: all .9s ease;`;

  headDoodle.classList.remove("hide");
  headDoodle.classList.remove("show");
  headDoodle.classList.add("active");
}

const lightOnMouseMove = e => {
  const {currentTarget: target } = e;
const rect = target.getBoundingClientRect(),
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;

  target.style.setProperty('--mouse-x', `${x}px`);
  target.style.setProperty('--mouse-y', `${y}px`);
}

for(const card of document.querySelectorAll('.skills__block')) {
  card.onmousemove = e => lightOnMouseMove(e);
}
