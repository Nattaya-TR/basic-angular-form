import {Component} from '@angular/core';
import { Friend } from './friend' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  FriendModel = new Friend();
  languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'Angular'];

  newFriend() {
    this.FriendModel = new Friend();
  }
}