import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Usernames } from './usernames'
import { interval, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from "./shared/users.service";

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

  constructor(private usersService:UsersService) {
    this.usersList = Usernames;
    this.channelSelected = "RuptureXX"
  }
  ngOnInit() {
    this.getUsers();
    this.getCurrentGeeber();
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
}
