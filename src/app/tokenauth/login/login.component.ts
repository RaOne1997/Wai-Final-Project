import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TokenloginService } from '../tokenlogin.service';

@Component({
  selector: 'app-login-tok',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TokenloginService]
})
export class LoginComponenttokde implements OnInit {
  @Output() newItemEvent = new EventEmitter<Boolean>();
  object = {
    email: '',
    password: '',
    rememberMe: false
  }



  constructor(private service: TokenloginService, private router: Router) 
  { 
    localStorage.setItem('hide', '0')
    
  }

  ngOnInit(): void {
  }

  login(object: NgForm) {
    this.service.login(object.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('hide', '1')
        this.router.navigate(['/Home'])
        console.log(res)
      },
      error: (err) => {
        console.log(err)

      }
    }
    )
  }
  reg(value:boolean){
    this.newItemEvent.emit(value);
  }
}
