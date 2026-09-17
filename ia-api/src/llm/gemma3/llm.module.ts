import { Module } from '@nestjs/common';
import { Gemma3LlmService } from './llm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [Gemma3LlmService],
  exports: [Gemma3LlmService],
})
export class Gemma3LlmModule {}
