<?php 
require_once('../config/conn.php');
session_start();
$myMoney = $_SESSION['money'];
$id = $_SESSION['id'];


if(isset($_SESSION['name'])){
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
        <input type="hidden" value="<?php echo $myMoney; ?>" id="myMoney">
        <input type="hidden" value="<?php echo $id; ?>" id="myId">
        <div class="header">
           <div class="left">
            <div class="userBox">
                    <img src="../images/airplane/userBox.png">
                    <h3><?php echo $_SESSION['name']; ?></h3>
                </div>
                <div class="moneyBox">
                    <img src="../images/airplane/money.png">
                    <h3 id="balance"><?php echo $myMoney; ?></h3>
                </div>
           </div>
           <div class="right">
            <div class="fpsBox">
                    <img src="../images/airplane/fps.png">
                    <h3>90ms</h3>
                </div>
                <i class="fas fa-bars" id="bar"></i>
           </div>
        </div>
        <div class="center">
            <div class="playBox">
                <!-- <img src="../images/airplane/playbg.png" class="playBg"> -->
                <div class="airplaneDiv" id="airplaneDiv">
                    <img src="../images/airplane/bg2.png" class="bg" id="playBoxBg">
                    <?php for($i=1;$i<=10;$i++){ ?>
                        <div class="air">
                            <img src="../images/airplane/air<?php echo $i?>.png" class="airImg">
                            <img src="../images/airplane/injection.png" class="injection">
                        </div>
                    <?php } ?>
                    <div></div>
                </div>
                <div class="airRnakList" id="airRnakList">
                    <div>
                        <p>00:<span id="countdown">00</span></p>
                    </div>
                    <div id="airTrend"></div>
                </div>
                <div class="airTopThree" id="airTopThree"></div>
                <div class="airTopTen" id="airTopTen"></div>
                
            </div>
            <div class="betBox">
                <input type="checkbox" id="hiddenRadioRank">

                <nav class="nav">
                    <img src="../images/airplane/btnchk1.png" id="gameBtn1" class="gameBtn">
                    <img src="../images/airplane/btn2.png" id="gameBtn2" class="gameBtn">
                    <img src="../images/airplane/btn3.png" id="gameBtn3" class="gameBtn">
                    <img src="../images/airplane/btn4.png" id="gameBtn4" class="gameBtn">
                    <img src="../images/airplane/btn5.png" id="gameBtn5" class="gameBtn">
                    <!-- <a href="javascript:;" class="focus">定位膽</a>
                    <a href="javascript:;">冠亞二星</a>
                    <a href="javascript:;">大小單雙</a>
                    <a href="javascript:;">冠亞和</a>
                    <a href="javascript:;">龍虎</a> -->
                </nav>
                <div class="content" id="game1">
                    <span class="odds">猜每一個名次的稱號 賠率9.8</span>
                    <div class="rankBtnBox" id="rankBtnBox">
                        <?php for($i=1;$i<=10;$i++){ ?>
                            <img src="../images/airplane/no<?php echo $i;?>.png" id="rankingImg<?php echo $i; ?>" class="rankingImg" onclick="toggleRankingFn(<?php echo $i;?>)">
                        <?php } ?>
                    </div>
                    <div class="airplaneRankBox" id="airplaneRankBox">
                        <?php for($i=1;$i<=10;$i++){ ?>
                        <!-- <div class="rank no<?php echo $i; ?>" id="airRank"> -->
                        <div class="rank no<?php echo $i; ?>">
                            <img src="" class="smallDiamond">
                            <img src="../images/airplane/air<?php echo $i; ?>.png" class="air betAir" alt="<?php echo $i; ?>">
                        </div>
                        <?php } ?>
                    </div>
                </div>
                <div class="content" id="game2"></div>
                <div class="content" id="game3"></div>
                <div class="content" id="game4"></div>
                <div class="content" id="game5"></div>
            </div>
            <div class="betList">
                <!-- <img src="../images/airplane/betList.png" class="betListBg"> -->
                <!-- <p class="betText">SR17082208161906</p> -->
                <div class="header">注單列表</div>
                <div class="list">
                    <div class="title"><p>下注<br>期號</p></div>
                    <div class="issue">SR17082208161906</div>
                </div>

                <div class="total">
                    <p>總注數</p>
                    <p>總投注金額</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="diamondBox" id="diamondBox">
                <i class="fa-solid fa-chevron-left" id="diamondBoxLeft"></i>
                <i class="fa-solid fa-chevron-right" id="diamondBoxRight"></i>
                <div class="diamondBoxList">
                    <img src="../images/airplane/diamond10.png" alt="10" class="diamondBtn">
                    <img src="../images/airplane/diamond50.png" alt="50" class="diamondBtn">
                    <img src="../images/airplane/diamond100.png" alt="100" class="diamondBtn">
                    <img src="../images/airplane/diamond1000.png" alt="1000" class="diamondBtn">
                    <img src="../images/airplane/diamond5000.png" alt="5000" class="diamondBtn">
                    <img src="../images/airplane/diamond10000.png" alt="10000" class="diamondBtn">
                </div>
               
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>
<script src="../js/airplane.js"></script>
</body>
</html>

<?php } else{
    header('Location:./error.php');
}
?>