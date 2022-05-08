<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)) {

        $id = trim($request->id);
        $fPublicacion = trim($request->fechap);
        $fEvento = trim($request->fechae);
        $hEvento = trim($request->horae);
        $descripcion = trim($request->descripcion);
        $verificador = trim($request->verificador);

        $sql = "UPDATE comunicado SET fecha_Publicacion ='$fPublicacion', fecha_Evento ='$fEvento', hora_Evento ='$hEvento', descripcion ='$descripcion', estado ='2', verificador ='$verificador' WHERE id= $id";

        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'fechaP'=> $fPublicacion,
            'fechaE'=> $fEvento,
            'horaE'=> $hEvento,
            'descripcion'=> $descripcion,
            'verificador'=> $verificador,
            'comunicado' => mysqli_insert_id($mysqli)
         ];
            echo json_encode($authdata);
        }
    }

?>