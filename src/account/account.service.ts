import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DataSource } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(private dataSource: DataSource,
    private readonly appService:AppService,){}

  async create(createAccountDto: CreateAccountDto) {
    const accountRepo= await this.dataSource.getRepository(Account);
    const account= new Account()
    account.accountNumber= createAccountDto.accountNumber
    account.balance= createAccountDto.balance
    account.owner.id= createAccountDto.ownerId
    accountRepo.save(account)
  }

  async findAll() {
    const accountRepo= await this.dataSource.getRepository(Account);;
    const accounts= accountRepo.find()
    return accounts;
  }

  findOne(id: number) {
    const accountRepo= this.dataSource.getRepository(Account);
    return accountRepo.find({where: {id:id}});
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  async remove(id: number) {
    const accountRepo= await this.dataSource.getRepository(Account);
    accountRepo.delete(id);
  }
}
