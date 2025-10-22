import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    pk_task: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

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

    @Column({type:'int', nullable: false})
    fk_user: number;
}
