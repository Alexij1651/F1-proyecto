function genNavbar() {
  const nav = document.getElementById("navbar");
  nav.innerHTML = `
    <nav class="navbar">
      <span class="navbar-brand">🏎️ PitLine</span>
      <div class="navbar-links">
<a href="/F1-proyecto/" class="navbar-link">Live</a>
<a href="/F1-proyecto/drivers/" class="navbar-link">Drivers</a>
<a href="/F1-proyecto/telemetry/" class="navbar-link">Telemetry</a>
      </div>
    </nav>
  `;
}

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
genNavbar();
genHeader();