
<?php
session_start();
include_once('../config/conn.php');
$upuser = "";
if(isset($_GET['code'])){
    $sql_str = "SELECT * FROM member WHERE chkcode = :code";

    $stmt = $conn -> prepare($sql_str);
    //接收資料
    $code = $_GET['code'];
  

    //綁定資料
    $stmt -> bindParam(':code',$code);
  

    //執行
    $stmt -> execute();
   
    $total = $stmt -> rowCount();
    if($total>=1){
        $row_RS = $stmt -> fetch(PDO::FETCH_ASSOC);
        $upuser =  $row_RS['username'];
    }
}
?>
<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>加入會員</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <?php include_once('../shared/header.php'); ?>
    <div id="register">
        <!-- <h1>REGISTER</h1> -->
        <img src="../images/addmember.png" class="regtitle">
        <form method="post" action="../function/mem_addmem_ok.php" class="mem-addmem-area">
            <p>建立您的DYM帳號</p>
            <label for="">
                <span>帳號:</span><input type="text" name="username" class="username" 
                placeholder="請輸入帳號..." required></label>
            <div class="msg_username"></div>
            <label for="">
                <span>手機號碼:</span>
                <input type="text" name="mem_mail" class="mem_mail" 
                    placeholder="請輸入手機號碼..." required>
            </label>
                <div class="msg_mail"></div>
            <label for="">
                <span>玩家名稱:</span>
                <input type="text" name="mem_name" class="mem_name" 
                    placeholder="請輸入真實姓名..." required>
            </label>
           <label for="">
               <span>登入密碼:</span>
                <input type="password" name="mem_pwd" class="mem_pwd" 
                    placeholder="請輸入密碼 (6~20個英數字或符號)" required>
           </label>
                <div class="msg_pwd"></div>
            <label for="">
                <span>確認密碼:</span>
                <input type="password" name="confirm_pwd" class="confirm_pwd" 
                    placeholder="請再一次輸入相同密碼" required>
            </label>
                <div class="msg_confirm_pwd"></div>
            <label for="">
                <span class="line">LINE ID:</span>
                <input type="text" name="mem_line" class="line" 
                    placeholder="請輸入LINE ID(選填)" >
            </label>
            <label for="">
                <span>驗證碼:</span>
                <input type="text" name="chkcode" class="chkcode" 
                    placeholder="請輸入驗證碼" required>
                    <div class="codeDiv">
                    <img src="../function/chkcode_img_create.php" class="chkcodeimg" alt="">
                    <a href="javascript:;" class="re-chkcode">重新顯示驗證碼</a>
                    </div>
            </label>
                <div class="msg_chkcode"></div>  
                
            <!-- 顯示驗證碼圖片 -->
           


            <input type="submit" class="submit-btn" value="註冊" />
            <input type="hidden" name="MM_process" value="addmem">
            <input type="hidden" name="usercode" value="<?php echo $upuser; ?>">

            <!-- 以下是負責各欄位即時檢驗後顯示訊息的區域 -->
        </form>
    </div>
<style>
    .mem-addmem-area div { text-align: left; color: red; letter-spacing: 0; font-size: 15px; font-weight: 600;}
    .str1, .str0 { display: inline-block; width: 20px; height: 10px; margin-right:3px; }
    .str1 { background-color: #CBC080; }
    .str0 { background-color: lightgray; } 
</style>
<script src="../js/jquery-3.4.1.min.js"></script>
<script src="../js/check_mem_register.js"></script>
</body>
</html>