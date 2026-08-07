const tabla = document.getElementById("cuerpo_tabla")
fetch('https://api.openf1.org/v1/drivers?session_key=latest')
  .then(respuesta => respuesta.json())
  .then (datos => {
    let html = '';
    for(const elemento of datos){html += `<tr>
      <td>${elemento.full_name}</td>
      </tr>`}
      tabla.innerHTML =html;
})
  .catch(error => console.error('Error:', error));
