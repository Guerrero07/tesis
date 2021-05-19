// ---funcion mostrar contrseña---//

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

//----finciones de crear comunicado----//

    function mostrartc(id) {
        if (id == "citacion") {
            $("#citacion2").show();
            $("#citacion3").show();
            $("#comunicado2").hide();
            $("#cont2").show();
            $("#cont3").show();
            $("#cont4").show();
            $("#boton").show();

        }

        if (id == "comunicado") {
            $("#citacion2").hide();
            $("#citacion3").hide();
            $("#comunicado2").show();
            $("#cont2").show();
            $("#cont3").show();
            $("#cont4").show();
            $("#boton").show();

        }
    }
    function mostrar2(id) {
        if (id == "otro") {
            $("#citacion1").hide();
        }

        if (id == "docente") {
            $("#citacion1").show();
        }
    }

    function agTutor()
    {
        document.getElementById('tutor').value = document.getElementById('alumno').value;
    }

    var expanded = false;

    function showCheckboxes() {

        var turnoMañana = document.getElementById("turnoMañana");
        if (!expanded) {
            turnoMañana.style.display = "block";
            turnoTarde.style.display = "block";
            expanded = true;
        } else {
            turnoMañana.style.display = "none";
            turnoTarde.style.display = "none";
            expanded = false;
        }
    }

    $(function(){
        $('#mañana-todos').change(function() {
          $('#turnoMañana >label >input[type=checkbox]').prop('checked', $(this).is(':checked'));
        });
      });
  
      $(function(){
        $('#tarde-todos').change(function() {
          $('#turnoTarde >label >input[type=checkbox]').prop('checked', $(this).is(':checked'));
        });
      });

//----- funciones de lista de comunicado-----//

function Eliminar (i) {
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    document.getElementById("tableid").deleteRow(i);
}
function BuscarTc() {
            var tabla = document.getElementById('tblComunicado');
            var busqueda = document.getElementById('selec').value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
            for (var i = 1; i < tabla.rows.length; i++) {
                cellsOfRow = tabla.rows[i].getElementsByTagName('td');
                found = false;
                for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tabla.rows[i].style.display = '';
                } else {
                    tabla.rows[i].style.display = 'none';
                }
            }
        }

        function BuscarEm() {
            var tabla = document.getElementById('tblComunicado');
            var busqueda = document.getElementById('selec2').value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
            for (var i = 1; i < tabla.rows.length; i++) {
                cellsOfRow = tabla.rows[i].getElementsByTagName('td');
                found = false;
                for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tabla.rows[i].style.display = '';
                } else {
                    tabla.rows[i].style.display = 'none';
                }
            }
        }
//----- funciones de Detalle de comunicado----//

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
        
    $(document).ready(function(){
      	$(document).on('click', '.reservar', function(){

                var nombre = $("RESERVA EXITOSA").text();
                $('#alumno').val(nombre);
                $("#alumno").prop("disabled", false);
                $("#area").prop("disabled", false);
                $("#materia").prop("disabled", true);
                $("#horario").prop("disabled", true);
            });
        });
        function mostrar(id) {
            if (id == "1") {              
                $("#materia").hide();
                $("#horario1").hide();
                $('#horario2').hide();
                $('#horario3').hide();
                $("#dia").show();
                $("#horadia").show();
            }

            if (id == "2") {
                $("#materia").show();
                $("#dia").hide();
                $("#horadia").hide();
            }
        }
        function mhorario(id) {
            if (id == 1) {
                $("#horario1").show();
                $('#horario2').hide();
                $('#horario3').hide();
            }
            if (id == 2) {
                $("#horario2").show();
                $('#horario1').hide();
                $('#horario3').hide();
            }
            if (id == 3) {
                $("#horario3").show();
                $('#horario1').hide();
                $('#horario2').hide();
            }
        }

// ocultar y mostrar boton de crear entrevista

function showContent() {
    element = document.getElementById("contenedor-boton");
    check = document.getElementById("checkAvanzado");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}
