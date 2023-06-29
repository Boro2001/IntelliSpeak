import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input() childMessage: string = '';
  @Output() childMessageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
