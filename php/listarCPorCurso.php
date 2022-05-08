<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "SELECT tc.descripcion as tipo,
        c.fecha_publicacion,
        c.fecha_evento,
        c.hora_evento,
        c.origen,
        c.descripcion
        FROM comunicado as c,
        tipo_comunicado as tc,
        matricula as mt,
        detalle_comunicado as dc,
        alumno as a
        WHERE dc.id_Comunicado=c.id
        AND tc.id=c.tipo
        AND c.estado=2
        AND dc.nivel=mt.nivel
        AND dc.curso=mt.curso
        AND dc.turno=mt.turno
        AND a.tutor=$codigo
        GROUP BY c.id
        ORDER BY c.id DESC";

        if($result = mysqli_query($mysqli,$sql))  {
            $rows = array();

            while($row = mysqli_fetch_assoc($result)){
                $rows[] = $row;
            }
        echo json_encode($rows);
        }
        else{
            http_response_code(404);
        }
    }
?>