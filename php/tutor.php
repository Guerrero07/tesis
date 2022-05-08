<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){
     
        $nombre = trim($request->nombre);
        $paterno = trim($request->paterno);
        $materno = trim($request->materno);
        $telefono = trim($request->telefono);
        $tipo = trim($request->tipo);
        $alumno = trim($request->alumno);
        $mysqli->autocommit(false);
        try{
          $mysqli->query("INSERT INTO persona(carnet,nombre,paterno,materno,telefono) VALUES ('$nombre','$paterno','$materno','$telefono')");
          $idmax=  mysqli_insert_id($mysqli);
          $mysqli->query("INSERT INTO tutor(id_tutor, parentezco) VALUES ('$idmax','$tipo')");
          $mysqli->query("UPDATE alumno SET tutor='$idmax' WHERE id_alumno=$alumno");
          $mysqli->commit();
         
        }catch (Exception $e) {
        $mysqli->rollback();
        echo 'El registo fallo: ',  $e->getMessage(), "\n";
        }
    }
?>