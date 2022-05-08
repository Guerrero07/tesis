<?php
include_once("database.php");
$createUser = file_get_contents("php://input");
$request = json_decode($createUser);
    if(isset($createUser) && !empty($createUser)) {
        
        $id = trim($request->id);
        $username = trim($request->username);
        $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $rol = trim($request->rol);
        $entrevista = trim($request->entrevista);

        $sql = "INSERT INTO usuario(id_usuario,username,email,password,rol, entrevista) VALUES ('$id','$username','$email','$pwd','$rol','$entrevista')";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'id'=>$id,
                'username' => $username,
                'email' => $email,
                'rol'=> $rol,
                'entrevista'=> $entrevista,
                'User' => mysqli_insert_id($mysqli)
            ];
        echo json_encode($authdata);
        }
    }

?>