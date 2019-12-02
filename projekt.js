function displayMenu() {
  let tlacitko = document.querySelector("#menu");
  if (tlacitko.style.display === "block") {
      tlacitko.style.display = "none";
  } else {
      tlacitko.style.display = "block";
  }
}

function cancelMenu() {

if (window.matchMedia("(max-width: 499px)").matches) {

      let tlacitko = document.querySelector("#menu");
      tlacitko.style.display = "none";
  }
}

function readArticle() {
  var x = document.querySelector("#readMore");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}

