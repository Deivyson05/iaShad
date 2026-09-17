import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EmbeddingService {
    constructor(
        private readonly http: HttpService
    ){}

    async generate(text: string): Promise<number[]> {
        const { data } = await firstValueFrom(
            this.http.post(
                `${process.env.GEMMA3_URL}/api/embed/`,
                {
                    model: 'nomic-embed-text',
                    input: text
                }
            )
        );
        return data.embeddings[0];
    }
}
