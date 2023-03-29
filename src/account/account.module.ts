import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AppService]
})
export class AccountModule {}
