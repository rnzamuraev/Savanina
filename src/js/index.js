// scroll

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// carousel

const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".carousel__slide"),
  dots = document.querySelectorAll(".carousel__dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const preepareCurrentSlide = (ind) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    preepareCurrentSlide(index);
  } else {
    index++;
    preepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    preepareCurrentSlide(index);
  } else {
    index--;
    preepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    preepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
