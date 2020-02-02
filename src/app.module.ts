import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { LunchesModule } from './lunches/lunches.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommonModule,
    TranslationModule,
    LunchesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
