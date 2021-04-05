<?php
include_once("database.php");

    $sql = "SELECT users.id, users.name, users.email, users.password, roles.descripcion AS 'rol'
    FROM users
    INNER JOIN roles 
    WHERE users.rol=roles.id";
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
        
?>