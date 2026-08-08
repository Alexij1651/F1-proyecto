/*

*/

const tabla = document.getElementById("cuerpo_tabla");
fetch("https://api.openf1.org/v1/session_result?session_key=latest")
  .then((sesion) => sesion.json())
  .then((dato1) => {
    fetch("https://api.openf1.org/v1/drivers?session_key=latest")
      .then((piloto) => piloto.json())
      .then((dato2) => {
        for (const resultado of dato1) {
          const piloto = dato2.find(p => p.driver_number == resultado.driver_number);
          console.log(resultado.position,piloto.full_name)
        }
      });
  })
  .catch((error) => console.error("Error:", error));
