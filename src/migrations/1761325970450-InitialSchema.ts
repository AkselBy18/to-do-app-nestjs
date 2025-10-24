import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1761325970450 implements MigrationInterface {
    name = 'InitialSchema1761325970450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`pk_user\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(200) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`pk_user\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
