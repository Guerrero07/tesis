
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)){ 
        $codigo = trim($request->codigo);
        $token = trim($request->token);

        $sql = "UPDATE usuario SET token='$token' WHERE id_usuario=$codigo";

        if ($mysqli->query($sql) === TRUE) {
            echo('exito');
        } else{
            http_response_code(404);
        }
    }
?>