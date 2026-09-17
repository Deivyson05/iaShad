import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import Groq from 'groq-sdk';
import { Prompts } from 'src/prompt/prompts';

@Injectable()
export class GroqLlmService {
    private groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
    });

    constructor(private readonly http: HttpService) { }

    async generate(prompt: string) {
        const response = await this.groq.chat.completions.create({
            messages: [{ role: "system", content: Prompts.elisa }, { role: "user", content: prompt }],
            model: "openai/gpt-oss-20b"
        });

        return response.choices[0].message.content;
    }
}
