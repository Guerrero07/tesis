<?php
include_once("database.php");
$postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        $id = trim($request->id);
        $username = trim($request->username);
        $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $rol = trim($request->rol);
        $entrevista = trim($request->entrevista);
        $identrevista = trim($request->identrevista);

        $sql = "INSERT INTO usuario(id_person,username,email,password,tipo_usuario, entrevista, id_entrevista) VALUES ('$id','$username','$email','$pwd','$rol','$entrevista','$identrevista')";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'id'=>$id,
                'username' => $username,
                'email' => $email,
                'rol'=> $rol,
                'entrevista'=> $entrevista,
                'identrevista'=> $identrevista,
                'User' => mysqli_insert_id($mysqli)
            ];
        echo json_encode($authdata);
        }
    }

?>