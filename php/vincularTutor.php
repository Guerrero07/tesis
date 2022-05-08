<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

    if(isset($postdata) && !empty($postdata)){
        $request = json_decode($postdata);
        $alumno = trim($request->alumno);
        $tutor = trim($request->tutor);
        
        $sql = "UPDATE alumno SET tutor='$tutor' WHERE id_alumno=$alumno";
        
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'alumno' => $alumno,
            'tutor' => $tutor,
            $idmax=  mysqli_insert_id($mysqli)
            ];
               echo json_encode($authdata);
        }
    }
?>