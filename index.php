<?php
session_start();
require 'config.php';
require_once 'connection.php';

echo '<style type="text/css"> #errorMessage{visibility: hidden !important;}</style>';
if (array_key_exists('signin', $_POST)) {

    $login = mysqli_real_escape_string($conn, $_POST["login"]);
    $parola = mysqli_real_escape_string($conn, $_POST['password']);

    $query = "SELECT *FROM users WHERE BINARY login=?";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $login);

    $stmt->execute();

    $res = $stmt->get_result();
    $row = $res->fetch_assoc();

    if ($row) {
        $hashedPassword = $row["password"];
        if (md5($_POST["password"]) == $hashedPassword) {
            header('Location: http://' . $_SERVER['SERVER_NAME'] . $caleMain);
        } else {
            echo '<style type="text/css"> #errorMessage{visibility: visible !important;}</style>';
        }
    } else {
        echo '<style type="text/css"> #errorMessage{visibility: visible !important;}</style>';
    }
    mysqli_close($conn);
}
$login = $parola = "";
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="js/bootstrap.min.js"></script>
<script src="js/bootstrap.js"></script>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background: url("fon.jpg");
            background-size: cover
        }

        input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
            background-color: wheat;
            border-radius: 30px;
        }

        input[type=submit] {
            background-color: olivedrab;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            color: white;
            border-radius: 30px;
        }

        input[type=submit]:hover {
            opacity: 0.8;
        }

        .container {
            padding: 16px;
        }

        span.psw {
            float: right;
            padding-top: 16px;
        }

        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
        }

        .center {
            margin: auto;
            width: 30%;
            padding: 10px;
        }

        .title {
            margin-top: auto;
            padding-left: 32%;
            padding-bottom: 1%;
        }

        .containers {
            min-width: 150px;
            min-height: 150px;
            background: #3a3a3a;
            padding: 20px 20px;
            border-radius: 30px;
            box-shadow: 1px 1px 15px black;
            opacity: 90%;
        }

    </style>
</head>
<body>

<div class="center containers">
    <h2 class="title">Autentificare</h2>
    <form action="<?php $_SERVER['SCRIPT_NAME'] ?>" method="post">

        <div class="container">
            <label for="login"><b>Login</b></label>
            <input type="text" autocomplete="off" placeholder="Enter Username" name="login">

            <label for="password"><b>Parola</b></label>
            <input type="password" autocomplete="off" placeholder="Enter Password" name="password">

            <span id="errorMessage" style="color: red; visibility: hidden; ">Wrong username or password!</span>

            <input type="submit" name='signin'
                   class="w3-container w3-border w3-round-xlarge w3-card-16 w3-green w3-padding-16 w3-hover-border-green"
                   value="Logheaza-te"/>
                   
                   <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

<div id="id01" class="w3-modal">
  <div class="w3-modal-content">
    <div class="w3-container">
      <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
      <p>Test fereastra modala</p>
    </div>
  </div>
</div>
        </div>
    </form>
</div>

</body>
</html>
