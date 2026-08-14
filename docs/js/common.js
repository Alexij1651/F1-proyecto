
function genHeader() {
  fetch("https://api.openf1.org/v1/meetings?meeting_key=latest")
    .then((carrera) => carrera.json())
    .then((circuito) => {
      document.getElementById("nombre-gp").textContent =
        circuito[0].meeting_name;
      document.getElementById("flag").src = circuito[0].country_flag;
    })
    .catch((error) => console.error("Error:", error));
}
genHeader();