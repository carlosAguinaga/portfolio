// menu button
const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");
const linkMenu = document.querySelector("ul.nav-list");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});


linkMenu.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});


// typed.js
const typed = new Typed(".typed", {
  strings: [
    '<i class="typed-skill">Developer</i>',
    '<i class="typed-skill">UX/UI</i>',
    '<i class="typed-skill">Fullstack</i>',
  ],
  // stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

// botón switch darkmode
const btnSwith = document.querySelector("#switch");

btnSwith.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  btnSwith.classList.toggle("active");

  //save mode in local storage
  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.setItem("dark-mode", false);
  }
});

// Get current mode
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("darkmode");
  btnSwith.classList.add("active");
} else {
  document.body.classList.remove("darkmode");
  btnSwith.classList.remove("active");
}
