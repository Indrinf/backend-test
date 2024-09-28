import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('library_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
