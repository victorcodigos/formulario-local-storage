const nombre = document.getElementById("nombre"); 
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");
const borrar = document.getElementById("borrando");


btn.addEventListener('click', function(e){
    e.preventDefault()
     console.log(nombre.value ,correo.value, mensaje.value)
     localStorage.setItem('intentar',JSON.stringify({

        nombre:nombre.value,
        correo:correo.value,
        mensaje:mensaje.value

     }))


     const intentar = JSON.parse(localStorage.getItem('intentar'));

} )


