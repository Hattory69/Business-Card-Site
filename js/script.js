const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const gsapProject = document.querySelectorAll(".fade");
gsapProject.forEach((el) => observer.observe(el));

const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector(".hero__sd-link").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1;
  }, 30);
};

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

const navLink = document.querySelectorAll(".header__link");
const navItem = document.querySelectorAll(".item-js");
const borderAnim = document.querySelectorAll(".main__borders");
const topBorder = document.querySelector(".main__wrapper :nth-child(1)");
const rightBorder = document.querySelector(".main__wrapper :nth-child(2)");
const bottomBorder = document.querySelector(".main__wrapper :nth-child(3)");
const leftBorder = document.querySelector(".main__wrapper :nth-child(4)");
const borderWidth = '50%';

borderAnim.forEach(function (border) {
  border.classList.add("active");
});

navLink.forEach(function (navBtn) {
  navBtn.addEventListener("click", function (e) {
    document
      .querySelector('[data-target="AboutMe"]')
      .classList.remove("active");

    navItem.forEach(function (element) {
      element.classList.remove("active");
    });

    const path = e.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.add("active");

    if (path === 'Skills') {
      topBorder.style.left = borderWidth;
      rightBorder.style.bottom = borderWidth;
      bottomBorder.style.right = borderWidth;
      leftBorder.style.top = borderWidth;
    }
  });
});

const skillsBtn = document.querySelectorAll(".skills__btn");
const skillsItem = document.querySelectorAll(".skills__item");
const skillsBlock = document.querySelectorAll(".skills__block");

skillsBtn.forEach(function (skillsBtns) {
  skillsBtns.addEventListener("click", function (e) {
    skillsBlock.forEach(function (element) {
      element.classList.remove("skills__selected");
    });

    skillsItem.forEach(function (element) {
      element.classList.remove("active", "skills__default");
    });

    const path = e.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.add("active");

    const parentBlock = skillsBtns.parentNode;
    parentBlock.classList.add("skills__selected");
  });
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
    cursor: url('../img/hammer-down.svg'), auto;`;
    headDoodle.classList.add("show");
    headDoodle.classList.remove("hide");
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

const lightOnMouseMove = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left;
  y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".skills__block")) {
  card.onmousemove = (e) => lightOnMouseMove(e);
}



const contactBtn = document.querySelector(".contacts__send-form");
contactBtn.addEventListener("click", function (e) {
  let size = Math.max(this.offsetWidth, this.offsetHeight),
    x = e.offsetX - size / 2,
    y = e.offsetY - size / 2,
    waveClick = this.querySelector(".wave");

  if (!waveClick) {
    waveClick = document.createElement("span");
    waveClick.className = "buttonWave";
  }
  waveClick.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
  this.appendChild(waveClick);
});
