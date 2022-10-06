<?php 
require_once('../config/conn.php');
session_start();
ini_set ( 'date.timezone' , 'Asia/Taipei' );  
date_default_timezone_set('Asia/Taipei');
// $date = date("d", strtotime("+1 day"));
// $year = date("y");
// $vids = date("Y");
// $month = date("m");
echo date("h");
if(isset($_POST['add']) && $_POST['add'] == "yes"){
    
    $date = date("d",);
    $year = date("y");
    $vids = date("Y");
    $month = date("m");
    $minute = 0;
    $hour = intval(date('H'));
    // $number = "SR9359".$year.$month.$date."1030";
    $overt = 0;
    $nowTime = date("H");
    
    $twoHour = date("H", strtotime("+2 hour"));
    $datenumber = $vids.$month.$date."-".$nowTime."-".$twoHour;
    $minuteStr = "";
    $hourStr = "";
   
    for($n=0;$n<120;$n++){
        $rankingArr = [1,2,3,4,5,6,7,8,9,10];
        shuffle($rankingArr);
        $ranking = implode(",",$rankingArr);
        $minute ++;
        if($minute >= 60){
            $hour++;
            $minute = 0;
        }
        if($hour >= 24){
            $hour = 0;
        }
        if($minute < 10){
            $minuteStr = "0".$minute;
        }else{
            $minuteStr = $minute;
        }
        if($hour < 10){
            $hourStr = "0".$hour;
        }else{
            $hourStr = $hour;
        }
        
        $number = "SR9359".$year.$month.$date.$hourStr.$minuteStr;
        $sql_str = "INSERT INTO answer (number,ranking,overt,datenumber) VALUES (:number, :ranking, :overt,:datenumber)";
    
        $stmt = $conn -> prepare($sql_str);
        $stmt -> bindParam(':number' ,$number);
        $stmt -> bindParam(':ranking' ,$ranking);
        $stmt -> bindParam(':overt' ,$overt);
        $stmt -> bindParam(':datenumber' ,$datenumber);
        $stmt -> execute();

    }
}
