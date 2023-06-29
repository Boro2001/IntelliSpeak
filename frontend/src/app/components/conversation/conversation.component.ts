import { Component, OnInit } from '@angular/core';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

// https://js.langchain.com/docs/getting-started/guide-chat
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  OPENAI_API_KEY="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"
  model = new OpenAI({ openAIApiKey: this.OPENAI_API_KEY, temperature: 0.9 });
  memory = new BufferMemory();
  message: string = '';
  childMessage: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  async generate() {
    // console.log("generate")
    // const res = await this.model.call(
    //   "What is the best way to learng english?"
    // );
    // console.log(res);
  }


}
