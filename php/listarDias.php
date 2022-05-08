<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "SELECT u.username,
        e.id,
        e.id_user as usuario,
        e.dia,
        e.hora,
        u.entrevista,
        e.estado
FROM matricula AS m, 
maestro_detalle AS d, 
entrevista AS e, 
usuario AS u
INNER JOIN docente as dc
WHERE m.nivel=d.nivel
AND m.curso=d.curso
AND m.turno=d.turno
AND d.docente=e.id_user
AND dc.id_docente=d.docente
AND u.id_usuario=$codigo
AND u.entrevista=1
AND e.estado=1
GROUP BY e.id";

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