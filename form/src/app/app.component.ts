import {Component} from '@angular/core';
import { Friend } from './friend' ;
import {AddFriendService} from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  FriendModel = new Friend();
  languages: Array<string> = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'Angular'];
  submitted = false;
  onSubmit(): void
   {this.submitted = true;
    console.log(this.FriendModel);
   }
   constructor(private addFriendService: json) {
   }
}
