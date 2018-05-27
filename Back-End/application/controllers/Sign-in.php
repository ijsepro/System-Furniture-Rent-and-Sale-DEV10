<?php

header('Access-Control-Allow-Origin: *');

$username =$_POST['username'];
$email =$_POST['email'];
$options =$_POST['options'];
$psw =$_POST['psw'];
$confirm =$_POST['confirm'];
$data_pack = json_decode(file_get_contents('php://input'));
$json = $data_pack->{"packageName"};

if(!empty($username)|| !empty($email) || !empty($options) || !empty($psw) || !empty($confirm)) {
	$host = "localhost";
	$dbUsername = "root";
	$dbPassword = "tharaka";
	$dbname = "FurniRent";

	//create Connection
	$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

	if (mysqli_connect_error()) {
		die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
	} else {
		$SELECT = "SELECT email From registation WHERE email=? Limit=1";
		$INSERT = "INSERT Into registation (regname ,email ,post,regpassword,conpassword) values (?,?,?,?,?)";

		//Prepare statemant
		$stmt = $conn->prepare($SELECT);
		$stmt->bind_param("s",$email);
		$stmt->execute();
		$stmt->bind_result($email);
		$stmt->store_result();
		$rnum=$stmt->num_rows;

		if($rnum==0){
			$stmt->close();
			$stmt=$conn->prepare($INSERT);
			$stmt->bind_param("reg",$regname,$email,$options,$psw,$confirm);
			$stmt->execute();
			echo "Registation Sucessfully";
		}else{
			echo "Someone Registation This Email";
		}
		$stmt->close();
		$conn->close();
	}
}else{
	echo "ALL field are required";
	die();
}
?>
