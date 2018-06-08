import {Component, ElementRef, OnInit} from '@angular/core';
import {PostService} from "../../post.service";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: PostService, private elem: ElementRef) {
  }

  ngOnInit() {
  }

  Register() {

    let formData = new FormData();

    let registerName = this.elem.nativeElement.qureySelector('#username').value;
    let registerEmail = this.elem.nativeElement.qureySelector('#email').value;
    let registerPostType = this.elem.nativeElement.qureySelector('#posttype').value;
    let registerPassword = this.elem.nativeElement.qureySelector('#password').value;
    let registerConfPassword = this.elem.nativeElement.qureySelector('#confpassword').value;

    formData.append('registerName', registerName);
    formData.append('registerEmail', registerEmail);
    formData.append('registerPostType', registerPostType);
    formData.append('registerPassword', registerPassword);
    formData.append('registerConfPassword', registerConfPassword);

    this.service.Register(formData).subscribe(res => {
      if(res.json()===1) {
        console.log("Sucsess");
      }else {
        console.log("Fail");
      }


    });

  }

}
