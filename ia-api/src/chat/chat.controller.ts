import { Body, Controller, Post } from '@nestjs/common';
import { GroqLlmService } from 'src/llm/groq/llm.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly llm: GroqLlmService) {}

    @Post()
    async chat(@Body('message') message: string) {
        return {
            response: await this.llm.generate(message),
        }
    }
}
