const tabla = document.getElementById("cuerpo_tabla")
fetch('https://api.openf1.org/v1/drivers?session_key=latest')
  .then(respuesta => respuesta.json())
  .then (datos => {
tabla.array.forEach(element => {
    
});
})
  .catch(error => console.error('Error:', error));
