<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){

        $ci = trim($request->ci);
        $nombre = trim($request->nombre);
        $paterno = trim($request->paterno);
        $materno = trim($request->materno);
        $telefono = trim($request->telefono);
        $nivel = trim($request->nivel);
        $curso = trim($request->curso);
        $turno = trim($request->turno);

        $mysqli->autocommit(false);
        try{
            $mysqli->query("INSERT INTO persona(carnet,nombre, paterno, materno,telefono) VALUES ('$ci','$nombre','$paterno','$materno','$telefono')");
            $idmax=  mysqli_insert_id($mysqli);
            $mysqli->query("INSERT INTO alumno(id_alumno, estado) VALUES ('$idmax', 1)");
            $mysqli->query("INSERT INTO matricula(alumno, nivel, curso, turno) VALUES ($idmax, $nivel, $curso, $turno)");
            $mysqli->commit();
            
          }catch (Exception $e) {
          $mysqli->rollback();
          echo "El registo fallo:",  $e->getMessage(), "\n";
          }
      }
?>