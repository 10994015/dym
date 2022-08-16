<?php 
require_once('./config/conn.php');
session_start();
?>
<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DYM</title>
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <header id="header">
        <a href="./" class="logo"><img src="./images/logo.png" class="logo"></a>
        <div class="left">
            <?php if(!isset($_SESSION['name'])){ ?>
            <a href="./web/login.php" class="login">會員登入</a>
            <a href="./web/register.php" class="register">免費註冊</a>
            <?php }else{ ?>
            <a href="./web/logout.php" class="login">登出</a>
            <?php } ?>
            <select name="" id="">
                <option value=""> 
                    繁體中文
                </option>
            </select>
        </div>
    </header>
    <nav id="nav">
        <a href="javascript:;">遊戲大廳</a>
        <a href="javascript:;">真人視訊</a>
        <a href="./web/airplane.php">飛機競速</a>
        <a href="javascript:;">體育賽事</a>
        <a href="javascript:;">優惠活動</a>
    </nav>
    <div id="index">
    </div>
</body>
</html>