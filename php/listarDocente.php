<?php
include_once("database.php");

    $sql = "SELECT p.id,
    p.carnet, 
    p.nombre, 
    p.paterno,
    p.materno,
    d.foto,
    t.descripcion AS materia
 FROM persona AS p
 INNER JOIN docente AS d ON d.id_docente=p.id
 INNER JOIN materia_detalle AS m ON m.docente=d.id_docente
 INNER JOIN materia AS t ON t.id=m.materia";
    
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=base64_encode($res['foto']);
            // $lista[]=$res;
        }
        echo json_encode($lista);
?>