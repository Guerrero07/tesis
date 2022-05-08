<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "SELECT p.id,
		p.nombre,
        p.paterno,
        p.materno,
        m.id as matricula
        FROM persona as p,
        tutor as t,
        matricula as m
        INNER JOIN alumno as a
        WHERE a.tutor=$codigo
        AND p.id=a.id_alumno
        and m.alumno=a.id_alumno
        GROUP BY p.id";

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