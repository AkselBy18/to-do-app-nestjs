import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1761326148720 implements MigrationInterface {
    name = 'InitialSchema1761326148720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tasks\` (\`pk_task\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`priority\` enum ('low', 'medium', 'hight') NOT NULL DEFAULT 'low', \`done\` tinyint NOT NULL DEFAULT 0, \`date_creation\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`date_update\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`fk_user\` int NOT NULL, PRIMARY KEY (\`pk_task\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tasks\``);
    }

}
