<?php 
include_once("database.php");

$severKey="AAAAFoJBj9o:APA91bEwKk4CuqxXhyLZRR0F3vFLuJhJK8zLGonNTnPsIQZ0nyQ5FHetxH64Ka2cSnpyR_BbtzmjPgRol1_QEDuRhCZ0VGmL6W_s0qN5uVTzHaoX7hkNst8z-q1XQDRzH3QfGcIDmhGm";
$url="https://fcm.googleapis.com/fcm/send";

// $mensaje = $_POST['mensaje'];
// $tokenId=$_POST['token'];
// $prioridad=$_POST['prioridad'];
// $icono="http://localhost/notificaciones/img/icon.png";
// if($prioridad == 'alta'){
//     $icono="http://localhost/notificaciones/img/icon.png";
// }
$field=array(
        'notification'=>array(
            'title'=>'No has pagado',
            'body'=>'esto es el cuerpo',
            'icon'=>'http://localhost/tesis/src/assets/Imagenes/logo.jpg'
        
        ),
    'to'=>'ekcRULU9Uw2bjfEv4qHtN9:APA91bEEvSTkZCX9KPdDI3kcP11LtdhLno6hZmDuOzzoYu-FpozXvjN0CKHkvZai719LRWviuAUjksht6Mtumg2FGFnf3IP1zmk5M8Xm4E3Xxw9aKnhW6zCReQ7yGdL4blNQit0WAzrz'
);
$fields=json_encode($field);

$header=array(
    'Authorization: key='.$severKey,
    'Content-Type: application/json'
);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

$result=curl_exec($ch);
echo $result;
curl_close($ch);