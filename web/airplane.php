<?php 
require_once('../config/conn.php');
session_start();
$myMoney = $_SESSION['money'];

?>

<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>飛機競速</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <div id="airplane">
        <div class="header">
           <div class="left">
            <div class="userBox">
                    <img src="../images/airplane/userBox.png">
                    <h3><?php echo $_SESSION['name']; ?></h3>
                </div>
                <div class="moneyBox">
                    <img src="../images/airplane/money.png">
                    <h3><?php echo $myMoney; ?></h3>
                </div>
           </div>
           <div class="right">
            <div class="fpsBox">
                    <img src="../images/airplane/fps.png">
                    <h3>90ms</h3>
                </div>
                <i class="fas fa-bars"></i>
           </div>
        </div>
        <div class="center">
            <div class="playBox">
                <img src="../images/airplane/playbg.png" class="playBg">
                <div class="airplaneDiv" id="airplaneDiv">
                    <?php for($i=1;$i<=10;$i++){ ?>
                    <div class="air">
                        <img src="../images/airplane/air<?php echo $i?>.png" class="airImg">
                    </div>
                    <?php } ?>
                </div>
                <div class="airRnakList" id="airRnakList">
                </div>
            </div>
            <div class="betBox">
                <nav class="nav">
                    <a href="javascript:;" class="focus">定位膽</a>
                    <a href="javascript:;">冠亞二星</a>
                    <a href="javascript:;">大小單雙</a>
                    <a href="javascript:;">冠亞和</a>
                    <a href="javascript:;">龍虎</a>
                </nav>
                <div class="content">
                    <span class="odds">猜每一個名次的稱號 賠率9.8</span>
                    <div class="rankBtnBox">
                        <?php for($i=1;$i<=10;$i++){ ?>
                            <img src="../images/airplane/no<?php echo $i;?>.png">
                        <?php } ?>
                    </div>
                    <div class="airplaneRankBox">
                        <?php for($i=1;$i<=10;$i++){ ?>
                        <div class="rank no<?php echo $i; ?>" id="airRank">
                            <img src="../images/airplane/medal<?php echo $i; ?>.png" class="medal">
                            <img src="../images/airplane/air<?php echo $i; ?>.png" class="air">
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
            <div class="betList">
                <img src="../images/airplane/betList.png" class="betListBg">
                <p class="betText">SR17082208161906</p>
            </div>
        </div>
        <div class="bottom">
            <div class="diamondBox" id="diamondBox">
                <img src="../images/airplane/diamond10.png" alt="10" class="diamondBtn">
                <img src="../images/airplane/diamond50.png" alt="50" class="diamondBtn">
                <img src="../images/airplane/diamond100.png" alt="100" class="diamondBtn">
                <img src="../images/airplane/diamond500.png" alt="500" class="diamondBtn">
            </div>
            <div class="perbetBox">
                <img src="../images/airplane/perbet.png">
                <p class="dollar" id="dollar">0</p>
            </div>
            <div class="btnBox">
                <img src="../images/airplane/duble.png" id="doubleBtn">
                <img src="../images/airplane/re.png" id="reBtn">
                <img src="../images/airplane/chk.png" id="chkBtn">
            </div>
        </div>
    </div>
<script src="../js/airplane.js"></script>
</body>
</html>