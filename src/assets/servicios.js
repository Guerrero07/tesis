function mayus(e) {
    e.value = e.value.toUpperCase();
}

//----- cambiar color del div de citacion-------
$(document).ready(function () {
    $('#miBoton').on('click', function () {
        $('#headingOne').addClass('visto');
    });
});
// ---funcion mostrar contraseña de login---//

function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        $('#img-check').replaceWith('<img class="img-check" id="img-check" src="../../../assets/Imagenes/hide.png">');
    } else {
        x.type = "password";
        $('#img-check').replaceWith('<img class="img-check" id="img-check" src="../../../assets/Imagenes/eye.png">');
    }
}

//----funciones de crear comunicado----//

function mostrartc(id) {
    //informativa
    if (id == "1") {
        $("#citacion2").hide();
        $("#citacion3").show();
        $("#comunicado2").show();
        $("#cont2").show();
        $("#cont3").hide();
        $("#cont4").show();
        $("#boton").show();
    }
    //convocatoria
    else if (id == "2") {
        $("#citacion2").hide();
        $("#citacion3").show();
        $("#comunicado2").show();
        $("#cont2").show();
        $("#cont3").show();
        $("#cont4").show();
        $("#boton").show();
    }
    //invitacion
    else if (id == "3") {
        $("#citacion2").hide();
        $("#citacion3").show();
        $("#comunicado2").show();
        $("#cont2").show();
        $("#cont3").show();
        $("#cont4").show();
        $("#boton").show();
    }
    //citacion
    else if (id == "4") {
        $("#citacion2").show();
        $("#citacion3").show();
        $("#comunicado2").hide();
        $("#cont2").show();
        $("#cont3").show();
        $("#cont4").show();
        $("#boton").show();
    }
}
function mostrar2(id) {
    if (id == "Direccion") {
        $("#citacion1").hide();
        document.getElementById('destino').value = id;
    }

    if (id == "Finanza") {
        $("#citacion1").hide();
        document.getElementById('destino').value = id;
    }
    if (id == "Consejero") {
        $("#citacion1").hide();
        document.getElementById('destino').value = id;
    }
    if (id == "Docente") {
        $("#citacion1").show();
        document.getElementById('destino').value = id;
    }
}

// var expanded = false;

// function showCheckboxes() {

//     var turnoMañana = document.getElementById("subConCursos");
//     if (!expanded) {
//         turnoMañana.style.display = "block";
//         expanded = true;
//     } else {
//         turnoMañana.style.display = "none";
//         expanded = false;
//     }
// }

// $(function () {
//     $('#cursosAll').click(function () {
//         $('#marcarAll >label >input[type=checkbox]').prop('checked', $(this).is(':checked'));
//     })
// });

//----- funciones buscar en la lista de comunicado-----//

function Eliminar(i) {
    document.getElementsByTagName("table")[0].setAttribute("id", "tableid");
    document.getElementById("tableid").deleteRow(i);
}
function BuscarTc() {
    var tabla = document.getElementById('tblComunicado');
    var busqueda = document.getElementById('tipoCom').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;

    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';

        } else {
            Eliminar(i);
            // tabla.rows[i].style.display = 'none';
        }
    }
}

function BuscarOrigen() {
    var tabla = document.getElementById('tblComunicado');
    var busqueda = document.getElementById('Origen').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;

    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
function BuscarFechaPublicacion() {
    var tabla = document.getElementById('tblComunicado');
    var busqueda = document.getElementById('fechaP').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;

    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
function BuscarFechaEvento() {
    var tabla = document.getElementById('tblComunicado');
    var busqueda = document.getElementById('fechaE').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;

    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
//----- funcion editar en Detalle de comunicado----//

$(document).ready(function () {
    $("#btnEditar").click(function () {
        $("#campoh").prop("disabled", false);
        $("#campof").prop("disabled", false);
        $("#campo-descripcion").prop("disabled", false);

        $("#campoh").css("background-color", "white");
        $("#campof").css("background-color", "white");
        $("#campo-descripcion").css("background-color", "white");
    })
});

//----- funciones de entrevista-----//


//---- ocultar y mostrar boton de crear entrevista----

function showContent() {
    element = document.getElementById("contenedor-boton");
    check = document.getElementById("checkAvanzado");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}

// ------ cambiar imagen en mision vision-----

function cambiar(sw) {
    var img;
    if (sw == 0) {
        img = "../../../../assets/Imagenes/logo-mision.png";
    } else if (sw == 1) {
        img = "../../../../assets/Imagenes/logo-vision.png";
    } else if (sw == 2) {
        img = "../../../../assets/Imagenes/logo-valores.png";
    }
    document.getElementById('logo').src = img;
}

let opciones1 = document.getElementById("tipo")
let opciones2 = document.getElementById("origen")

// mostar los input de los horarios para crear enntrevista

$(document).ready(function () {
    // CREAR
    $('#agregarHora').on('click', function () {
        var valor = $("#time").val();
        $('#contenedorH').append('<div class="contHora"><input type="time"  id="time" (change)="capturar($event)"><button type="button" class="btn btn-outline-danger remover">Eliminar</button></div>');
    });
    //ELIMINAR
    $(document).on('click', '.remover', function () {
        $(this).parents('.contHora').remove();
    });

});