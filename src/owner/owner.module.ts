import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService, AppService]
})
export class OwnerModule {}
