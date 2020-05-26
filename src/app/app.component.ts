import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Usernames } from './usernames'
import { interval, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from "./shared/users.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;
  username = 'RuptureXX'
  channelSelected:string;
  usersList: User[] = Usernames;
  statusText: string;
  currentGeeber: any;

  signupForm: FormGroup;

  constructor(private usersService:UsersService, private formBuilder: FormBuilder) {
    this.usersList = Usernames;
    this.channelSelected = "RuptureXX";

  }
  private initForm(){
    this.signupForm = new FormGroup({
        'channelName' : new FormControl('', Validators.required),
    });
}
  ngOnInit() {
    this.getUsers();
    this.getCurrentGeeber();
    this.initForm();
  }
  users;

  changeChannel(username) {
    this.channelSelected = username;
    console.log(this.channelSelected);
  }

  getUsers= () =>
    this.usersService
      .getUsers()
      .subscribe(res => (this.users = res));

  getCurrentGeeber() {
    this.currentGeeber = this.usersService.getCurrentUser();
    this.channelSelected = this.currentGeeber.valueChanges();
    console.log("The current geeber is"+ this.channelSelected);
  }

  onSubmit() {
    // Process checkout data here
    this.usersService.createUser(this.signupForm.value);
    console.warn('Your order has been submitted', this.signupForm.value);
    this.signupForm.reset();

  }
}
