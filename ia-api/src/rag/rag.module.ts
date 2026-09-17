import { Module } from '@nestjs/common';
import { EmbeddingService } from './embedding/embedding.service';
import { EmbeddingModule } from './embedding/embedding.module';
import { ChunkingModule } from './chunking/chunking.module';
import { IngestionService } from './ingestion/ingestion.service';
import { RetriecalService } from './retriecal/retriecal.service';
import { RagService } from './rag.service';

@Module({
  providers: [EmbeddingService, IngestionService, RetriecalService, RagService],
  imports: [EmbeddingModule, ChunkingModule]
})
export class RagModule {}
