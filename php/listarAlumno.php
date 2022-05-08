<?php
include_once("database.php");

    $sql = "SELECT ps.id,
            ps.carnet, 
            ps.nombre, 
            ps.paterno as paterno, 
            ps.materno as materno, 
            n.descripcion as nivel, 
            c.descripcion as curso,
            t.descripcion as turno,
            a.tutor
    FROM matricula as mt,
    persona as ps,
    nivel as n,
    curso as c,
    turno as t
    INNER JOIN alumno as a
    WHERE a.id_alumno=mt.alumno
    AND ps.id=a.id_alumno
    AND n.id=mt.nivel
    AND c.id=mt.curso
    AND t.id=mt.turno
    ORDER BY ps.id DESC";
    
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
?>