<?php
include_once("database.php");

    $sql = "SELECT c.id,
    t.descripcion as 'tipo',
    c.origen, 
    c.fecha_Publicacion,
    c.fecha_Evento, 
    c.hora_Evento,
    c.descripcion as detalle,
     GROUP_CONCAT(DISTINCT x.curso) AS destinatario,
    u.username as redactor
    FROM comunicado AS c,
    detalle_comunicado AS x,
    usuario AS u,
    tipo_comunicado AS t
        WHERE c.tipo= t.id
        AND c.redactor=u.id_usuario
        AND c.id=x.id_comunicado
        AND c.estado=1 
        GROUP BY x.id_comunicado";
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
?>