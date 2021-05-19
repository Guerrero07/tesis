<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$nombre = trim($request->nombre);
$paterno = trim($request->paterno);
$materno = trim($request->materno);
$telefono = trim($request->telefono);
$sql = "INSERT INTO persona(nombre,ap_paterno,ap_materno,telefono) VALUES ('$nombre','$paterno','$materno','$telefono')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'nombre' => $nombre,
'paterno' => $paterno,
'materno' => $materno,
'telefono'=> $telefono,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>