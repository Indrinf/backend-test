"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../infrastructure/database");
class Member extends sequelize_1.Model {
}
exports.Member = Member;
Member.init({
    code: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    borrowedBooksCount: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    penaltyUntil: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Member',
});
