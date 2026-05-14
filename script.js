const formOracion = document.getElementById("formOracion");
const mensajeExito = document.getElementById("mensajeExito");

formOracion.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const motivo = document.getElementById("motivo").value.trim();

  if (nombre === "" || motivo === "") {
    mensajeExito.textContent = "Por favor completa todos los campos.";
    mensajeExito.style.color = "red";
    return;
  }

  mensajeExito.textContent = "Tu petición fue enviada correctamente. Estaremos orando por ti.";
  mensajeExito.style.color = "green";

  formOracion.reset();
});




const btnMensajes = document.getElementById("btnMensajes");

if (btnMensajes) {
  btnMensajes.addEventListener("click", function () {
    alert("No disponible por el momento");
  });
}