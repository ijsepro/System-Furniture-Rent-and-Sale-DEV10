import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PostService {

  private url='http://localhost/Back-end/Register/getRegistration';

  constructor(private http:Http){

  }

  getPost(){
    return this.http.get('http://localhost/BackEnd/index.php/welcome')
  }

  Register(formData){
    return this.http.post(this.url,formData)
  }
}
