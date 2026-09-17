import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class Gemma3LlmService {
    constructor(private readonly http: HttpService) { }

    async generate(prompt: string) {
        const response = await firstValueFrom(
            this.http.post('http://192.168.0.106:11434/api/chat', {
                model: 'gemma3:4b',
                messages: [
                    { role: "system", content: "só responde" },
                    { role: "user", content: prompt },
                ],
                stream: false
            })
        );

        return response.data.message.content;
    }
}
