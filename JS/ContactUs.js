document.getElementById("links").innerHTML = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <p align="center">Derechos reservados @2023 </p>`

function mostrarDatosContacto () {

    let nombreContacto = document.getElementById("Nombre").value;
    let emailContacto= document.getElementById("email").value;
    let telefonoContacto = document.getElementById("telefono").value;
    let mensajeContacto = document.getElementById("mensaje").value;

    // const Arrayemail = new Array() //CREO EL ARRAY VACIO


    if (nombreContacto =="" || emailContacto == "" || telefonoContacto == "" || mensajeContacto == "")
    {
        alert("Todos los campos deben estar completos");
    }
    else
    {
            if (emailContacto.charAt(0) == "@" || emailContacto.charAt(emailContacto.length-1) == "@")
            {
                alert("@ todo mal");
                return 0;
            }
            else
            {
                // alert(emailContacto.charAt(0));
                // alert(emailContacto.charAt(emailContacto.length-1));
                let newWindow = window.open ("", "NuevoContacto", "width=500,height=100,location=0,scrollbars=0,resizable=0,titlebar=0");
                newWindow.document.write ("<link rel='stylesheet' href='CSS/CSS_Contact_us.css'><table border='2'><tr><td><p>Hola, ",nombreContacto, " Gracias por contactarnos. Te enviaremos una respuesta al mail indicado, ",emailContacto," o, en su defecto, te estaremos llamando al telefono ",telefonoContacto,".</p></td></tr></table>")
                
            }
            
        // }
 
    }
   
}