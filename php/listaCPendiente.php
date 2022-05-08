<?php
include_once("database.php");

    $sql = "SELECT comunicado.id,
    t.descripcion as 'tipo',
    origen,
    fecha_Publicacion,
    fecha_Evento,
    hora_Evento,
    comunicado.descripcion,
    redactor
    FROM comunicado
    INNER JOIN tipo_comunicado as t ON comunicado.tipo=t.id
    WHERE comunicado.tipo= t.id
    AND estado=1
    ORDER BY comunicado.id DESC";
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
?>