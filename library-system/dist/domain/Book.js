"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../infrastructure/database");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    code: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Book',
});
