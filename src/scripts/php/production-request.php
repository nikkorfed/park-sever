<?

include 'libraries/PHPMailer.php';
include 'libraries/Exception.php';
include 'libraries/SMTP.php';

if (isset($_POST['name']) && isset($_POST['phone'])) {
  
  // Собираем данные из формы
  $company = $_POST['company'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $phoneLink = str_replace([' ', '(', ')', '-'], '', $phone);
  $email = $_POST['email'];
  $product = $_POST['product'];
  $question = $_POST['question'];
  
  $from = 'info@zgm-karpinsk.ru';
  $fromName = 'ЗГМ';
  $to = 'info@zgm96.ru';
  $blindCopyTo = 'nikkorfed@gmail.com';
  
  // Инициализируем библиотеку
  $mail = new PHPMailer\PHPMailer\PHPMailer;
  $mail->CharSet = 'UTF-8';
  $mail->XMailer = ' ';
  
  // Параметры для отправки
  $mail->isSMTP();
  $mail->Host = 'ssl://mail.hosting.reg.ru';
  $mail->SMTPAuth = true;
  $mail->Username = 'info@zgm-karpinsk.ru';
  $mail->Password = 'CLln9!Jm';
  $mail->Port = 465;
  
  $mail->setFrom($from, $fromName);
  $mail->addReplyTo($from, $fromName);
  $mail->addAddress($to);
  $mail->addBCC($blindCopyTo);
  $mail->isHTML(true);
  
  // Содержание письма
  $subject = 'Запрос продукции';
  $mail->Subject = $subject;
  $mail->Body = "
    <html>
      <head>
        <title>$subject</title>
        <style>

          body {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', 'Arial';
            font-size: 15px;
            line-height: 1.5;
            color: #333;
            -webkit-font-smoothing: antialiased;
          }

          .background {
            height: 100%;
            background-color: #f8f8f8;
          }

          .wrapper {
            margin: auto;
            padding: 20px 15px;
            max-width: 600px;
          }

          .logo {
            display: block;
            border-bottom: 1px solid #eee;
            height: 60px;
            background: url('http://zgm-karpinsk.ru/images/logo.png') 50% 50% no-repeat;
            background-size: 140px;
          }

          h1 {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          .subtitle {
            margin: -20px 0 20px;
            font-size: 16px;
            text-align: center;
            color: #888;
          }

          .block {
            overflow-y: auto;
            margin-bottom: 20px;
            border-radius: 5px;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 15px 0 rgba(69, 69, 69, .05);
          }

          h2 {
            margin: 0 0 10px;
            font-size: 18px;
          }

          p {
            margin: 0 0 10px;
          }

          .link {
            text-decoration: none;
            color: #1c69d4;
          }

          .section {
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
          }

          .section.last {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }

          .label {
            color: #888;
          }

          .number {
            white-space: nowrap;
            color: #aaa;
          }

          .nowrap {
            white-space: nowrap;
          }

          .value {
            float: right;
            font-weight: bold;
            color: #333;
          }

        </style>
      </head>
      <body>
        <div class=\"background\">
          <div class=\"wrapper\">
            <h1>$subject</h1>
            <div class=\"block\">
              <h2>Клиент</h2>
              <div class=\"section\">
                <div class=\"label\">Компания</div>
                <div class=\"text\">$company</div>
              </div>
              <div class=\"section\">
                <div class=\"label\">Имя</div>
                <div class=\"text\">$name</div>
              </div>
              <div class=\"section\">
                <div class=\"label\">Телефон</div>
                <div class=\"text\"><a class=\"link\" href=\"callto:$phoneLink\">$phone</a></div>
              </div>
              <div class=\"section last\">
                <div class=\"label\">Email</div>
                <div class=\"text\"><a class=\"link\" href=\"mailto:$email\">$email</a></div>
              </div>
            </div>
            <div class=\"block\">
              <h2>Вопрос</h2>
              <div class=\"section\">
                <div class=\"label\">Продукт</div>
                <div class=\"text\">$product</div>
              </div>
              <div class=\"section last\">
                <div class=\"label\">Вопрос</div>
                <div class=\"text\">$question</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  ";

  if ($mail->send()) {
    header('content-type: application/json; charset=UTF-8');
    echo json_encode(["message" => "message-sent"], JSON_UNESCAPED_UNICODE);
  } else {
    header('content-type: application/json; charset=UTF-8');
    echo json_encode(["error" => $mail->ErrorInfo], JSON_UNESCAPED_UNICODE);
  }

}

?>
