<?php
include_once('../config/conn.php');
session_start();

$_SESSION['id']    = ""; 
$_SESSION['name']  = ""; 
$_SESSION['username']  = ""; 
$_SESSION['mail']  = ""; 
$_SESSION['money']  = ""; 
$_SESSION['mem_level'] = ""; 

unset($_SESSION['id']);
unset($_SESSION['name']);
unset($_SESSION['username']);
unset($_SESSION['money']);
unset($_SESSION['mail']);
unset($_SESSION['mem_level']);
 
// header('Location:../');
echo "<script> window.location.href='../';alert('登出成功!'); </script>"
?>

