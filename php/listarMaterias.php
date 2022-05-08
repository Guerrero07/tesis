<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "SELECT md.docente AS id,
        CONCAT(p.nombre,' ',p.paterno,' ',p.materno) AS docente,
        mt.descripcion as materia,
        m.id as matricula,
        m.alumno
        FROM maestro_detalle AS md,
        matricula as m,
        materia_detalle as x,
        materia as mt,
        persona AS p
        WHERE m.nivel=md.nivel
        AND m.curso=md.curso
        AND m.turno=md.turno
        AND p.id=md.docente
        AND m.alumno=$codigo
        GROUP BY x.materia";

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