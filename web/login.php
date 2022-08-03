<?php 
session_start();
include_once('../config/conn.php');
?>

<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登入</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <?php include_once('../shared/header.php'); ?>
    <div id="login">
        <form action="../function/member_check.php" method="POST">
            <img src="../images/logintitle.png" alt="">
            <input type="text" name="username" class="mem_mail" placeholder="請輸入帳號...." required/>
            <input type="password" name="pwd" class="mem_pwd" placeholder="請輸入密碼...." required/>
            <!-- <div class="link">
                <a href="./register.php" class="registerlink">會員申請</a>
                <a href="./customer.php" id="forgettext">忘記密碼?</a>
            </div> -->
            
            <input type="submit" class="submit-btn" value="登入" />
            <?php if(isset($_GET['msg']) && $_GET['msg']=="1"){ ?>
                <div class="error">帳號或密碼錯誤!</div>
            <?php } ?>
        </form>
    </div>
</body>
</html>