document.getElementById("links").innerHTML = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <p align="center">Derechos reservados @2023 </p>`

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto del formulario
        
        // Obtener los datos del formulario
        const formData = new FormData(document.getElementById('contactForm'));
    
        // Realizar el envío utilizando fetch
        // fetch('http://127.0.0.1:5000/mensajes', {
        fetch('https://snicolazzi.pythonanywhere.com/mensajes', {
        method: 'POST',
        body: formData
        })
        .then(response => {
        if (response.ok) {
            // Ocultar formulario
            document.getElementById('contactForm').style.display = 'none'; 
            // Mostrar el mensaje de "Datos enviados"
            document.getElementById('mensajeEnviado').style.display = 'block';
            
            // Reiniciar el formulario después de 2 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
            // Ocultar formulario
            document.getElementById('contactForm').reset();
            document.getElementById('contactForm').style.display = 'block'; 
            document.getElementById('mensajeEnviado').style.display = 'none';
            }, 2000);
        } else {
            throw new Error('Error al enviar los datos');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });
    });
    

// function mostrarDatosContacto () {

//     let nombreContacto = document.getElementById("Nombre").value;
//     let emailContacto= document.getElementById("email").value;
//     let telefonoContacto = document.getElementById("telefono").value;
//     let mensajeContacto = document.getElementById("mensaje").value;

//     // const Arrayemail = new Array() //CREO EL ARRAY VACIO


//     if (nombreContacto =="" || emailContacto == "" || telefonoContacto == "" || mensajeContacto == "")
//     {
//         alert("Todos los campos deben estar completos");
//     }
//     else
//     {
//             if (emailContacto.charAt(0) == "@" || emailContacto.charAt(emailContacto.length-1) == "@")
//             {
//                 alert("@ todo mal");
//                 return 0;
//             }
//             else
//             {
//                 // alert(emailContacto.charAt(0));
//                 // alert(emailContacto.charAt(emailContacto.length-1));
//                 let newWindow = window.open ("", "NuevoContacto", "scrollbars=no, width=400, height=350,resizable=no,scrollbars=no,status=no");
//                 newWindow.document.write ("<link rel='stylesheet' href='CSS/CSS_Contact_us.css'><table border='2'><tr><td><p>Hola, ",nombreContacto, " Gracias por contactarnos. Te enviaremos una respuesta al mail indicado, ",emailContacto," o, en su defecto, te estaremos llamando al telefono ",telefonoContacto,".</p></td></tr></table>")
                
//             }
            
//         // }
 
//     }
   
// }

