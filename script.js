const quemSomos_btn = document.getElementById("btn_quemSomos");
const servicos_btn = document.getElementById("btn_servicos");
const contato_btn = document.getElementById("btn_contato");

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop - 100];
  }
}

quemSomos_btn.addEventListener('click', function () {
  window.scroll(0, findPos(document.getElementById("quemSomos")));
});

servicos_btn.addEventListener('click', function () {
    window.scroll(0, findPos(document.getElementById("servicos")));
});

contato_btn.addEventListener('click', function () {
    window.scroll(0, findPos(document.getElementById("footer")));
});

const quemSomos = document.getElementById("quemSomos");
const servicosID = document.getElementById("servicos");

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // 30% do elemento visível
};

//fadein servicos
const observer = new IntersectionObserver(function (entries, observer2) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      servicosID.style.opacity = "1";
      servicosID.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}, options);
observer.observe(servicosID);

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")

card1.addEventListener('mouseover', function () {
  card_icon1.style.color = "green"
});

card1.addEventListener('mouseout', function () {
  card_icon1.style.color = ""
});

card2.addEventListener('mouseover', function () {
  card_icon2.style.color = "green"
});

card2.addEventListener('mouseout', function () {
  card_icon2.style.color = ""
});

card3.addEventListener('mouseover', function () {
  card_icon3.style.color = "green"
});

card3.addEventListener('mouseout', function () {
  card_icon3.style.color = ""
});