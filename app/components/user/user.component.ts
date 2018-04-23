import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ''
})
export class UserComponent implements OnInit {
  constructor(public username: string, public password: string, public role: string) { }

  ngOnInit() {
  }

}