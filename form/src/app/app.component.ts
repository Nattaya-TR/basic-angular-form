import {Component} from '@angular/core';
import {Friend} from './friend' ;
import {AddFriendService} from './add-friend.service';
import {OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form';
  FriendModel = new Friend();
  languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'Angular'];
  submitted = false;
  AllFriends = [{firstname: 'Coach', lastname: 'Tim', email: 'tim.broos@becode.org', phoneNumber: '0469420666', language: 'JavaScript'}];
  url = 'http://localhost:9003/allFriends';

  onSubmit(): void {
    this.submitted = true;
    this.addFriendService.addFriend(this.FriendModel)
      .subscribe
      (data => console.log(this.FriendModel), error => console.error(error));
  }

  constructor(private addFriendService: AddFriendService) {
  }
  public async getAllFriend(url: string): Promise<any> {
    return await fetch(this.url, {method: 'get', headers: {'Content-Type': 'application/json'}})
      .then(response => {
        return response.json();
      })
      .then(response => this.AllFriends = response);
  }
  ngOnInit(): any {
    this.getAllFriend(this.url).then(response => console.log(this.AllFriends));
  }
}
