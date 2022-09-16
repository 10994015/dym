<?php
require_once('../config/conn.php');
session_start();
if(isset($_GET['id']) && $_GET['id']!=""){
    $sql_str = "UPDATE member SET money=:money WHERE id = :id ";
    $stmt = $conn->prepare($sql_str);
    //接收表單輸入的資料
    $id      = $_GET['id'];
    $money = $_GET['money'];
    $stmt->bindParam(':id' ,$id);
    $stmt->bindParam(':money' ,$money);
    $stmt->execute();

    $_SESSION['money'] = $money;
}