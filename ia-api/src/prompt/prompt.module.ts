import { Module } from '@nestjs/common';
import { Prompts } from './prompts';

@Module({
    providers: [Prompts],
    exports: [Prompts],
})
export class PromptModule {}
