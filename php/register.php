<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$rol = trim($request->rol);
$sql = "INSERT INTO users(name,password,email,rol) VALUES ('$name','$pwd','$email','$rol')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'pwd' => '',
'email' => $email,
'rol'=> $rol,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>