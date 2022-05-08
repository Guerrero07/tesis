<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){

        $nombre = trim($request->nombre);
        $paterno = trim($request->paterno);
        $materno = trim($request->materno);
        $telefono = trim($request->telefono);
        
        $sql = "INSERT INTO persona(carnet,nombre,paterno,materno,telefono) VALUES ('$nombre','$paterno','$materno','$telefono')";
        
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'nombre' => $nombre,
            'paterno' => $paterno,
            'materno' => $materno,
            'telefono'=> $telefono,
            'id' => mysqli_insert_id($mysqli)
            ];
            echo json_encode($authdata);
        }
    }

?>