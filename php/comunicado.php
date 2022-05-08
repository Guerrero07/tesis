<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
   if(isset($postdata) && !empty($postdata)) {
  
      $tipo = trim($request->tipo);
      $origen = trim($request->origen);
      $fechap = trim($request->fechap);
      $fechae = trim($request->fechae);
      $horae = trim($request->horae);
      $descripcion = trim($request->descripcion);
      $redactor = trim($request->redactor);
      $nivel=($request->nivel);
      $turno=($request->turno);
      $curso=($request->curso);

      $sql="INSERT INTO comunicado(tipo,origen,fecha_publicacion,fecha_evento,hora_evento,descripcion,estado,redactor) VALUES ('$tipo','$origen','$fechap','$fechae','$horae','$descripcion','1','$redactor')";
      if ($mysqli->query($sql) === TRUE) {
         $idmax=  mysqli_insert_id($mysqli);
         $nv = count($nivel);
         $tn = count($turno);
         $cs = count($curso);

         for($i= 1; $i<=$nv; ++$i){
            for($j= 1; $j<=$tn; ++$j){
               for($k= 1; $k<=$cs; ++$k){
                  if($curso[$k]==7 || $curso[$k]==8){
                     $mysqli->query("INSERT INTO detalle_comunicado(id_comunicado, nivel, turno, curso) VALUES ('$idmax', '1', '$turno[$j]', '$curso[$k]')");
                  }
                  else{
                     $mysqli->query("INSERT INTO detalle_comunicado(id_comunicado, nivel, turno, curso) VALUES ('$idmax', '$nivel[$i]', '$turno[$j]', '$curso[$k]')");
                  }
                 
                  $sql="SELECT
                   u.token
                  FROM usuario as u,
                  matricula as mt,
                  detalle_comunicado as dc,
                  alumno as a
                  WHERE dc.nivel=$nivel[$i]
                  AND dc.turno=$turno[$j]
                  AND dc.curso=$curso[$k]
                  AND dc.id_comunicado= $idmax
                  AND mt.alumno=a.id_alumno
                  AND a.tutor=u.id_usuario
                  GROUP BY a.tutor";

                  if($result = mysqli_query($mysqli,$sql)) {
               
                     while($row = mysqli_fetch_assoc($result)){
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
                        curl_close($ch);
                     }
                  }
                  else{ 
                        http_response_code(404);}
               }
            } 
         }
      }
   }
?>
