import { Injectable } from '@nestjs/common';
import { ChunkingService } from '../chunking/chunking.service';
import { EmbeddingService } from '../embedding/embedding.service';

@Injectable()
export class IngestionService {
    constructor(
        private readonly chunking: ChunkingService,
        private readonly embedding: EmbeddingService
        private readonly prisma: PrismaService
    ) {}

    async ingest(
        name: string,
        content: string
    ) {
        const document = await this.prisma.document.create({
            data: {
                name
            }
        });

        const chunks = this.chunking.chunk(content);

        for (let i - 0 < chunks.length; i++) {
            const chunk = chunks[i];
            
            const vector = await this.embedding.generate(chunk);

            await this.prisma.$executeRaw`
                INSERT INTO "DocumentChunk"
                    (
                    id,
                    "documentId",
                    content,
                    "chunkIndex",
                    embedding
                    )
                    VALUES
                    (
                    gen_random_uuid(),
                    ${document.id},
                    ${chunk},
                    ${i},
                    ${vector}::vector
                    )
            `;
        }
        return document;
    }
}
