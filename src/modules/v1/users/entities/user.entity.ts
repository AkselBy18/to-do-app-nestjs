import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    pk_user: number;

    @Column({type: 'varchar', length: 150, nullable: false})
    name: string;

    @Column({type: 'varchar', length: 150, nullable: false, unique: true})
    email: string;

    @Column({type: 'varchar', length: 200, nullable: false})
    password: string;
}
