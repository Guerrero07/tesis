<?php
include_once("database.php");

    $sql = "SELECT u.id_usuario,
    u.username,
    u.email,
    u.PASSWORD,
    t.descripcion as rol,
    u.estado,
    u.fecha_creacion
    FROM usuario as u,
    tipo_usuario as t
    WHERE u.rol=t.id";
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
        
?>