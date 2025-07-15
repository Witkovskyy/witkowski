<?php

header('Access-Control-Allow-Origin: https://witkowski.fun');
header('Content-Type: application/json');

$payload = json_decode(file_get_contents('php://input'), true);
if (!$payload) {
  http_response_code(400);
  exit(json_encode(['success'=>false, 'error'=>'Invalid JSON']));
}

$name    = trim(strip_tags($payload['name']    ?? ''));
$email   = trim(filter_var($payload['email']   ?? '', FILTER_SANITIZE_EMAIL));
$message = trim(strip_tags($payload['message'] ?? ''));

if (!$name || !$email || !$message) {
  http_response_code(422);
  exit(json_encode(['success'=>false, 'error'=>'All fields are required']));
}

$to      = 'you@witkowski.fun';
$subject = "Contact form message from $name";
$body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: {$name} <{$email}>\r\nReply-To: {$email}";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(['success'=>true]);
} else {
  http_response_code(500);
  echo json_encode(['success'=>false, 'error'=>'mail() failed']);
}


?>