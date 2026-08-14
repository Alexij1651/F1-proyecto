const cacheCarreras = new Map();

function pintarCarreras(carreras) {
  let html = "";
  for (const carrera of carreras) {
    const pos = carrera.resultado
      ? carrera.resultado.dnf
        ? "DNF"
        : `P${carrera.resultado.position ?? "-"}`
      : "N/A";
    html += `<li>${carrera.gp} — ${pos}</li>`;
  }
  document.getElementById("modal-carreras").innerHTML = html;
}

function mostrarUltimasCarreras(driverNumber, nombrePiloto) {
  document.getElementById("modal-nombre").textContent = nombrePiloto;
  document.getElementById("modal-piloto").classList.remove("oculto");

  if (cacheCarreras.has(driverNumber)) {
    pintarCarreras(cacheCarreras.get(driverNumber));
    return;
  }

  document.getElementById("modal-carreras").innerHTML = "<li>Cargando...</li>";

  fetch("https://api.openf1.org/v1/sessions?session_name=Race&year=2026")
    .then((r) => r.json())
    .then((sesiones) => {
      const pasadas = sesiones.filter(
        (s) => new Date(s.date_start) < new Date(),
      );
      const ultimas3 = pasadas.slice(-3).reverse();

      cargarCarrerasSecuencial(ultimas3, driverNumber).then((carreras) => {
        cacheCarreras.set(driverNumber, carreras);
        pintarCarreras(carreras);
      });
    });
}

function genDrivers() {
  const contenedor = document.getElementById("cuerpo_tabla");

  fetch("https://api.openf1.org/v1/championship_teams?session_key=latest")
    .then((r) => r.json())
    .then((equipos) => {
      fetch("https://api.openf1.org/v1/championship_drivers?session_key=latest")
        .then((r) => r.json())
        .then((puntos) => {
          fetch("https://api.openf1.org/v1/drivers?session_key=latest")
            .then((r) => r.json())
            .then((infoPilotos) => {
              const pilotosCompletos = infoPilotos.map((p) => {
                const puntosPiloto = puntos.find(
                  (pt) => pt.driver_number == p.driver_number,
                );
                return {
                  ...p,
                  points: puntosPiloto ? puntosPiloto.points_current : 0,
                };
              });

              let html = "";
              for (const equipo of equipos) {
                const pilotosDelEquipo = pilotosCompletos.filter(
                  (p) => p.team_name == equipo.team_name,
                );

                html += `
                  <section class="equipo-bloque" style="border-left: 4px solid #${pilotosDelEquipo[0].team_colour}">
                    <h2 class="equipo-nombre">${equipo.team_name} <span class="equipo-puntos">${equipo.points_current} pts</span></h2>
                    <div class="pilotos-grid">
                `;

                for (const piloto of pilotosDelEquipo) {
                  html += `
                    <div class="piloto-card" data-driver="${piloto.driver_number}">
                      <img src="${piloto.headshot_url.replace("1col", "4col")}" class="piloto-foto" alt="${piloto.full_name}">
                      <p class="piloto-nombre">${piloto.full_name}</p>
                      <p class="piloto-puntos">${piloto.points} pts</p>
                    </div>
                  `;
                }

                html += `</div></section>`;
              }

              contenedor.innerHTML = html;
            });
        });
    })
    .catch((error) => console.error("Error:", error));
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cargarCarrerasSecuencial(sesiones, driverNumber) {
  const resultados = [];

  for (let i = 0; i < sesiones.length; i++) {
    const sesion = sesiones[i];
    const respuesta = await fetch(
      `https://api.openf1.org/v1/session_result?session_key=${sesion.session_key}&driver_number=${driverNumber}`,
    );
    const resultado = await respuesta.json();

    resultados.push({
      gp: sesion.location,
      resultado: resultado[0],
    });

    if (i < sesiones.length - 1) {
      await esperar(350);
    }
  }

  return resultados;
}

// Delegación de eventos: un solo listener en el contenedor padre
document.getElementById("cuerpo_tabla").addEventListener("click", (e) => {
  const tarjeta = e.target.closest(".piloto-card");
  if (!tarjeta) return;

  const driverNumber = tarjeta.dataset.driver;
  const nombre = tarjeta.querySelector(".piloto-nombre").textContent;
  mostrarUltimasCarreras(driverNumber, nombre);
});

document.getElementById("cerrar-modal").addEventListener("click", () => {
  document.getElementById("modal-piloto").classList.add("oculto");
});

genDrivers();
