import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent {

  public conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }

}
