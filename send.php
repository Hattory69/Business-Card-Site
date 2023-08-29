<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try{
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'YOUR.EMAIL@GMAIL.COM';
  $mail->Password   = '123456789';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom('YOUR.EMAIL@GMAIL.COM');

  $mail->addAddress('YOUR.EMAIL@GMAIL.COM');

  $mail->isHtml(true);

  $mail->Subject = 'Обратная связь по W-Wave';
  $mail->Body = 'Пользователь '  .$name. ' оставил отзыв, его почта ' .$email. '<br>
  <strong>Отзыв:</strong> <br>'
  .$message;

  $mail->send();
  $sending 'Message has been sent';

  $response = ['sending' => $sending];

  header ('Content-Type: application/json');
  echo json_encode($response);

}
  catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }

