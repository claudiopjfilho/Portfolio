function changeMode() {
  changeClasses();
}

function changeClasses() {
  body.classList.toggle(darkModeClass);
  imgProfile.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  p1.classList.toggle(darkModeClass);
  a1.classList.toggle(darkModeClass);
  a2.classList.toggle(darkModeClass);
  a3.classList.toggle(darkModeClass);
  a4.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
  imgBtn.classList.toggle(darkModeClass);
  devBY.classList.toggle(darkModeClass);
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode");
const imgProfile = document.getElementsByTagName("img")[1];
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1", "p")[0];
const p1 = document.getElementsByTagName("p")[0];
const a1 = document.getElementsByTagName("a")[0];
const a2 = document.getElementsByTagName("a")[1];
const a3 = document.getElementsByTagName("a")[2];
const a4 = document.getElementsByTagName("a")[3];
const imgBtn = document.getElementsByTagName("img")[0];
const devBY = document.getElementsByTagName("h4")[0];

button.addEventListener("click", changeMode);

export default changeMode();
