<?php
include_once("database.php");

    $sql = "SELECT ps.id,            
    ps.carnet, 
    CONCAT(ps.nombre,' ',
    ps.paterno,' ',
    ps.materno) as nombre_completo,
    mt.nivel,
    mt.curso,
    mt.turno,
    a.tutor
FROM matricula as mt,
persona as ps
INNER JOIN alumno as a
WHERE a.id_alumno=mt.alumno
AND ps.id=a.id_alumno
ORDER BY ps.nombre";
    
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
?>