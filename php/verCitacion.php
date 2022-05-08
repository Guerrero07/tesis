
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);

        $sql = "UPDATE solicitud SET estado =2 WHERE id=$codigo";

        if ($mysqli->query($sql) === TRUE) {
            echo('exito');
        }
    }
?>