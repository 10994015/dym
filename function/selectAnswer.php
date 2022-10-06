<?php

require_once('../config/conn.php');
session_start();
ini_set ( 'date.timezone' , 'Asia/Taipei' );  
date_default_timezone_set('Asia/Taipei');
// echo "哈囉";
if(isset($_GET['time']) && $_GET['time'] == "yes"){
    $nowTimeArr = [];
    $nowTime = date('y').date('m').date('d').date('H').date('i', strtotime("+1 minute"));
    
    $number = "SR9359" .  $nowTime;
    $sql_str = "SELECT * FROM answer WHERE number <= :number ORDER BY id DESC limit 6 ";
    $stmt = $conn->prepare($sql_str);
    $stmt->bindParam(':number',$number);
    $stmt->execute();
    $RS_ans = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $ans_json = json_encode($RS_ans);
    echo $ans_json;
    // $id = $RS_id['id'];
    // // echo "id=>".$id;
    // $sql_str = "SELECT * FROM answer WHERE id = :id ";
    // $stmt1 = $conn->prepare($sql_str);
    // $stmt1->bindParam(':id',$id);
    // $stmt1->execute();
    // $row_RS_ans1 = $stmt->fetch(PDO::FETCH_ASSOC);
    // // echo $row_RS_ans['number'];
    // array_push($nowTimeArr, [$row_RS_ans1['number'],$row_RS_ans1['ranking']]);

    // print_r($nowTimeArr) ;
}