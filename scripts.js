/* Script para el fuincionamiento del modo oscuro */

    /* Creo la constante tema y le especifico que objeto podra cambiar esta constante */
    const tema = document.querySelector('#switch input[type="checkbox"]');
    /* Creo la funcioón cambiar*/
    function cambiar(ev){
        /* Compruebo si esta activado para elegir un tema u otro */
        if(ev.target.checked){
            document.documentElement.setAttribute('tema', 'dark'); 
        } else {
            document.documentElement.setAttribute('tema', 'light');
        }
    }
    /* Añado el evento tema para cambiar al modo oscuro o claro cuando ocurra */
    tema.addEventListener('change', cambiar);

/* Script para el añadido de mapas leatflet */

    /* Establecemos la variable de mapa */
    var map = L.map('map').setView([39.47991610545045, -6.345921268586193], 13);

    /* Creamos el mapa */
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    /* Añadimos un marcador al mapa para señalar el sitio indicado */
    var marker = L.marker([39.47991610545045, -6.345921268586193]).addTo(map);

/* Script para la validación de datos del formulario */

    /*Se define el evento de JS para cuando se pulse el boton de Log In se pueda validar el formulario*/
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
    });
    /* Se crea la funcón de validación del formulario */
    function validarFormulario(evento) {
        evento.preventDefault();
        /* Establecemos la variable para obtener el campo del email y lo validamos */
        var email = document.getElementById('email').value;
        if(email.length == 0) {
            alert('Debe rellenar el campo de correo electrónico');
            return;
        }
        /* Establecemos la variable para obtener el campo del contraseña y lo validamos */
        var contraseña = document.getElementById('contraseña').value;
        if (contraseña.length < 6) { 
            alert('La contraseña no es válida');
            return;
        }
        /* this.submit(); enviamos el formulario pero esta comentado ya que no tenemos ningun sitio a donde enviar estos datos*/
    }