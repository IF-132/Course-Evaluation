
import { NgModule } from '@angular/core';
import { ChatRoutingModule } from './chat-routing.module';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { ChatComponent } from './chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  declarations: [
    AdminChatComponent,
    ChatComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
  ]
})
export class ChatModule { }
