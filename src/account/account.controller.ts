import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('create')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get('list')
  findAll() {
    return this.accountService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
