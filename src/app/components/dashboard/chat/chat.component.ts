import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation: { latestMessage: any; messages: { id: number; body: any; time: string; me: boolean; }[]; };
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  public emojiPickerVisible: any;
  public message = '';
  constructor() { }

  ngOnInit(): void { }

  submitMessage(event: any): any {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '10:21',
      me: true,
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }

}
