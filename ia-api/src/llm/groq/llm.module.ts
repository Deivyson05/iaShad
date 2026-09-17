import { Module } from '@nestjs/common';
import { GroqLlmService } from './llm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GroqLlmService],
  exports: [GroqLlmService],
})
export class GroqLlmModule {}
