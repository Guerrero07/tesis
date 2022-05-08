<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){
        
        $user = trim($request->user);
        $dia = trim($request->dia);
        $hora = trim($request->hora);
        
        $sql = "INSERT INTO entrevista(id_user,dia,hora,estado) VALUES ('$user','$dia','$hora','1')";
        
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'user' => $user,
            'dia' => $dia,
            'hora' => $hora,
            'estado'=> $estado,
            'id' => mysqli_insert_id($mysqli)
            ];
            echo json_encode($authdata);
        }
    }

?>