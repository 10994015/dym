<?php
require_once('../config/conn.php');
session_start();
ini_set ( 'date.timezone' , 'Asia/Taipei' );  
date_default_timezone_set('Asia/Taipei');

// $id = $_GET['id'];
if(isset($_GET['delete']) && $_GET['delete'] == "yes"){
    echo "刪除成功!";
    $sql_str = "DELETE FROM answer";
    $stmt = $conn -> prepare($sql_str);
    $stmt -> bindParam(':id', $id);
    $stmt -> execute();
}