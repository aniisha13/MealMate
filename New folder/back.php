<?php
$servername="localhost";
$username="root";
$password="";
$dbname="mealmate";

$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
    die("connection fail");
}

$Email=$_POST['email'];
$Pass=$_POST['password'];

$sql="INSERT INTO login (User name,Pass) VALUES ('$Email', '$Pass');";

if($conn->query($sql)==true)
{
    echo "new record added";
}
else
{
    echo"Error";
}
$conn->close();
?>