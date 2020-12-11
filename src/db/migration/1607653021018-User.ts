import {MigrationInterface, QueryRunner} from "typeorm";

export class User1607653021018 implements MigrationInterface {
    name = 'User1607653021018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `nickname` varchar(255) NULL COMMENT '昵称'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `nickname`");
    }

}
