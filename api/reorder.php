<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');


$filename = 'reorder/reorder.json';

$res = json_decode( file_get_contents($filename) );

$res->data = json_decode( $_POST['data'] );

echo json_encode( $res );

exit();
