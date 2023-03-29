import { Account } from "src/account/entities/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fullName: string;

    @Column()
    business: boolean;

    @OneToMany(()=> Account, (account)=> account.id)
    account:Account;
}
