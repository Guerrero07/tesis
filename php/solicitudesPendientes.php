<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "SELECT s.id,
        concat(p.nombre,' ',p.paterno,' ',p.materno) as origen,
        s.fecha,
        s.hora,
        s.motivo,
        s.estado
        FROM solicitud as s
        INNER JOIN usuario as u on u.id_usuario=s.destinatario
        INNER JOIN persona as p on p.id=s.origen
        WHERE s.destinatario=$codigo
        AND s.estado=1
        ORDER BY s.id DESC";

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