<?php

class RegisterModel extends CI_Model{

	public function AddRegister($data){

		$this->db->insert('Registers',$data);
		return $this->db->affected_rows();
	}
}

