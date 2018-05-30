<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 5/29/2018
 * Time: 7:30 PM
 */

class Register extends CI_Controller
{
	public function reg(){
		$this->load->database();

		$q= $this->db->get('email');
		print_r($q->result());
	}

}
