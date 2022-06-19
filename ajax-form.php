<?php
//Для начала проверим есть ли данные в полях name и email, что бы не слать совсем пустые формы :)
//Если всё в порядке, то работаем дальше
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["phone"]) && isset($_POST["typeofwork"]) && isset($_POST["typeofproduct"])) {

//Принимаем данные POST-запроса и записываем значения в переменные

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$product = $_POST['typeofproduct'];
$work = $_POST['typeofwork'];
$text = $_POST['text'];

//Теперь давайте настроим куда отправляем и откуда

$my_email = 'rinotello@yandex.ru'; // Куда отправляем
$sender_email = 'Новая заявка'; // От кого отправляем
$title = "Заголовок сообщения";

//Сообщение, которое приходит на почту со всеми нужными нам данными:

$mes = "
 Имя: $name\n
 Телефон: $phone\n
 E-mail: $email\n
 Тип сайта: $product\n
 Тип работы: $work\n
 Комментарии: $text\n
";

//Всё, теперь можно отправлять письмо на почту

$send = mail ($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");

}

?>
