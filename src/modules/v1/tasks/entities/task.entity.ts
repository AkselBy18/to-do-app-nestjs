import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    pk_task: number;

    @Column({
        type: 'enum',
        enum: ['low', 'medium', 'hight'],
        default: 'low'
    })
    priority: 'low' | 'medium' | 'hight';

    @Column({type:'boolean', default: false})
    done: boolean;

    @CreateDateColumn({
        name: 'date_creation',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP'
    })
    date_creation: Date;

    @UpdateDateColumn({
        name: 'date_update',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    date_update: Date;
    
    @JoinColumn({name: 'fk_user'})
    user: User
}
