<?php
include_once("database.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

        if(isset($postdata) && !empty($postdata))
        {
            $email = mysqli_real_escape_string($mysqli, trim($request->email));
            $pwd = mysqli_real_escape_string($mysqli, trim($request->password));

            $sql = "SELECT id_person, username, email, tipo_usuario, entrevista, id_entrevista FROM usuario where email='$email' and PASSWORD='$pwd'  and estado=1";

            if($result = mysqli_query($mysqli,$sql))
            {
                $rows = array();
             
                while($row = mysqli_fetch_assoc($result))
                {
                    $rows[] = $row;
                }
            echo json_encode($rows);
         
            }
            else
            {
                http_response_code(404);
            }
        }
?>