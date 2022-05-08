<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

    if(isset($postdata) && !empty($postdata)){

        $origen = trim($request->origen);
        $destinatario = trim($request->destinatario);
        $fecha = trim($request->fecha);
        $hora = trim($request->hora);
        $detalle = trim($request->detalle);
        
        $sql = "INSERT INTO solicitud(origen, destinatario, fecha, hora, motivo, estado) VALUES ('$origen','$destinatario','$fecha','$hora','$detalle','1')";
        
        if ($mysqli->query($sql) === TRUE) {
            $sql = "SELECT token FROM usuario WHERE id_usuario= $destinatario";

            if($result = mysqli_query($mysqli,$sql))  {
               
                $row = mysqli_fetch_assoc($result);
                $token=$row['token'];
                
             $severKey="AAAAFoJBj9o:APA91bEwKk4CuqxXhyLZRR0F3vFLuJhJK8zLGonNTnPsIQZ0nyQ5FHetxH64Ka2cSnpyR_BbtzmjPgRol1_QEDuRhCZ0VGmL6W_s0qN5uVTzHaoX7hkNst8z-q1XQDRzH3QfGcIDmhGm";
             $url="https://fcm.googleapis.com/fcm/send";
             $field=array(
                    'notification'=>array(
                        'title'=>'COLEGIO AVENGERS',
                        'body'=>'no has pagado',
                        'icon'=>'http://localhost/tesis/src/assets/Imagenes/logo.jpg'
                    ),
                'to'=>$token
            );
            echo json_encode($token);
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
            // echo $result;
            curl_close($ch);
            }
            else{
                http_response_code(404);
            }
        }
    }
 
?>