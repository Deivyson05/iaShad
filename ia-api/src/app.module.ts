import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Gemma3LlmModule } from './llm/gemma3/llm.module';
import { GroqLlmModule } from './llm/groq/llm.module';
import { ChatController } from './chat/chat.controller';
import { ConfigModule } from '@nestjs/config';
import { PromptModule } from './prompt/prompt.module';
import { RagModule } from './rag/rag.module';

@Module({
  imports: [Gemma3LlmModule, GroqLlmModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PromptModule,
    RagModule,
  ],
  controllers: [AppController, ChatController],
  providers: [AppService],
})
export class AppModule {}
