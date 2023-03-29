import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DataSource } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

  constructor(private dataSource:DataSource,
    private readonly appService:AppService,){}

  async create(createOwnerDto: CreateOwnerDto) {
    const OwnerRepo=await this.dataSource.getRepository(Owner);
    const owner= new Owner()
    owner.fullName= createOwnerDto.fullName
    owner.business= createOwnerDto.business
    OwnerRepo.save(owner)
  }

  async findAll() {
    const OwnerRepo= await this.dataSource.getRepository(Owner)
    const owners= OwnerRepo.find()
    return owners;
  }

  findOne(id: number) {
    const ownerRepo= this.dataSource.getRepository(Owner);
    return ownerRepo.find({where:{id:id}});
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

   async remove(id: number) {
    const ownerRepo= await this.dataSource.getRepository(Owner);
    ownerRepo.delete(id);
  }
}
