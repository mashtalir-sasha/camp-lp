<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['place'])) {$place=$_POST['place'];}

	$to = "sunnydreamfest@gmail.com"; // Замениь на емаил клиента

	$message = "Форма: $title <br><br>";
	if ( $name || $phonenum || $place ) {
		$message .= ""
			. ( $name ?" Имя:  $name <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br>" : "")
			. ( $place  ? " Место: $place <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@dance-school.kiev.ua"; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(camp.dance-school.kiev.ua)",$message,$headers); // Заменить домен на домен клиента
	}
?>