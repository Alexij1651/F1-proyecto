/*
This is the calls to the API's of OpenF1 to make the work of the main page
showing the results of the last race every weekend with a refresh delay of
5 second per refresh

genHeader shows the GP flag on the Header of the page.

genTable make the calls to the sesion_result to get the informacion 
and driver give back the driver personal information bc session doesn't
gives us names o any personal info of the driver.
*/
setInterval(genTable, 5000);

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

function genTable() {
  const tabla = document.getElementById("cuerpo_tabla");
  fetch("https://api.openf1.org/v1/session_result?session_key=latest")
    .then((sesion) => sesion.json())
    .then((dato1) => {
      fetch("https://api.openf1.org/v1/drivers?session_key=latest")
        .then((piloto) => piloto.json())
        .then((dato2) => {
          let html = "";
          for (const resultado of dato1) {
            const piloto = dato2.find(
              (p) => p.driver_number == resultado.driver_number,
            );
            html += `<tr style="border-left: 4px solid #${piloto.team_colour}">
          <td>${resultado.position ? resultado.position : "-"}</td>
          <td>${piloto.full_name}</td>
          <td>${piloto.team_name}</td>
          <td>${resultado.dnf ? "DNF" : resultado.gap_to_leader}</td>
          </tr>`;
          }
          tabla.innerHTML = html;
        });
    })
    .catch((error) => console.error("Error:", error));
}

genTable();
genHeader();
