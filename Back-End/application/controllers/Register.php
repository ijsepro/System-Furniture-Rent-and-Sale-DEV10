<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Register extends CI_Controller{

	public function  __construct()
	{
		parent::__construct();
		$this->load->model('RegisterModel');
	}

	public function getRegistration(){

		$result=$this->RegisterModel->AddRegister([
			'UserName' => $_POST['registerName'],
			'Email' => $_POST['registerEmail'],
			'PostType' => $_POST['registerPostType'],
			'Password1' => $_POST['registerPassword'],
			'ConfPassword' => $_POST['registerConfPassword'],
		]);
		echo $result;
	}

}
