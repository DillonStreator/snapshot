import { Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

import { User } from "../../shared/user/user";

@Component({
  selector: "login",
  templateUrl: "./pages/login/login.html",
  providers: [UserService]
})

export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    this.user.email = "dillontestapp@test.com";
    this.user.password = "password";
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signup();
    }
  }
  login(){
    this.router.navigate(['/home', { outlets: { dashboardoutlet: ['dashboard'] } }]);
    // this.userService.login(this.user)
    //   .subscribe(
    //     () => this.router.navigate(["/list"]),
    //     (error) => { alert("Unfortunately we could not find your account."); }
    //   );
  }
  signup(){
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created!");
          this.toggleDisplay();
        },
        () => { alert("Unfortunately we were unable to create your account"); }
      );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}