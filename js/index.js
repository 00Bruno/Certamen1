tinymce.init({
    selector: '#detacrim-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const reos = [];
const cargarTabla = ()=>{
    const tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0;i < reos.length; ++i){
        let r = reos[i];
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td")
        celdaNombre.innerText = r.nombre
        let celdaCantcrim = document.createElement("td")
        celdaCantcrim.innerText = r.detalles
        let celdaDetalles = document.createElement("td")
        celdaDetalles.innerText = r.ciudad
        let celdaCiudad = document.createElement("td")
        celdaCiudad.innerText = r.cantcrim

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCantcrim);
        fila.appendChild(celdaDetalles);
        fila.appendChild(celdaCiudad);
        tbody.appendChild(fila);
    }



}

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre   = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let cantcrim = document.querySelector("#cantcrim-number").value;
    let detalles = document.querySelector("#detacrim-txt").value;
    let ciudad   = document.querySelector("#ciudad-selct").value;

    let reo = {};
    reo.nombre   = nombre + " " + apellido;
    reo.cantcrim = cantcrim;
    reo.detalles = detalles;
    reo.ciudad   = ciudad;
    reos.push(reo);
    cargarTabla();
    Swal.fire({
        icon: 'success',
        title: '!Hecho¡',
        text: '!Registro de criminal realizado!',
        footer: '<a href>Why do I have this issue?</a>'
      })
});
