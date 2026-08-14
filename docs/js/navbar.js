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

genNavbar();